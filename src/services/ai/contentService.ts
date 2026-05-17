import { DEPARTMENTS, LIBRARY_INFO, FACULTY_LEADERSHIP } from "../../data/constants";

export interface RetrievalResult {
  query: string;
  context: string;
  foundData: boolean;
}

export function retrieveContext(query: string): RetrievalResult {
  const lowerQuery = query.toLowerCase();
  let contextParts: string[] = [];
  let foundData = false;

  // 1. Department matching
  const isAskingForAllDepartments = lowerQuery.includes("أقسام") || lowerQuery.includes("اقسام") || lowerQuery.includes("الاقسام") || lowerQuery.includes("الأقسام") || lowerQuery.includes("تخصصات") || lowerQuery.includes("برامج") || lowerQuery.includes("البرامج");
  
  let matchedDepartments = DEPARTMENTS.filter(
    (dept) =>
      isAskingForAllDepartments ||
      lowerQuery.includes(dept.title.toLowerCase()) ||
      lowerQuery.includes(dept.id.toLowerCase()) ||
      (lowerQuery.includes("قسم") && lowerQuery.includes(dept.title.replace("قسم", "").replace("التربية", "").trim().toLowerCase())) ||
      (lowerQuery.includes("برنامج") && lowerQuery.includes(dept.title.replace("برنامج", "").replace("إعداد", "").trim().toLowerCase()))
  );

  // If asking for all departments, just return their names, description, and duration to save tokens
  if (isAskingForAllDepartments) {
    foundData = true;
    contextParts.push("### الأقسام والبرامج المتاحة بالكلية:");
    matchedDepartments.forEach((dept) => {
      contextParts.push(
        `- **${dept.title}** (${dept.isProgram ? "برنامج نوعي خاص" : "قسم أساسي"}):\n` +
        `  - الوصف: ${dept.description}\n` +
        `  - مدة الدراسة: ${dept.duration}\n` +
        `  - رئيس القسم/المنسق: ${dept.headOfDept.name}`
      );
    });
  } else if (matchedDepartments.length > 0) {
    foundData = true;
    contextParts.push("### بيانات القسم/البرنامج المطلوب بالتفصيل:");
    matchedDepartments.forEach((dept) => {
      const objectivesStr = dept.categorizedObjectives
        ?.map((obj) => `    * **${obj.title}**:\n` + obj.items.map((item) => `      - ${item}`).join("\n"))
        .join("\n") || "غير محددة";

      contextParts.push(
        `- **الاسم**: ${dept.title}\n` +
        `  - الحالة: ${dept.isProgram ? "برنامج نوعي خاص" : "قسم أساسي"}\n` +
        `  - الوصف العام: ${dept.description}\n` +
        `  - نبذة شاملة: ${dept.overview}\n` +
        `  - الرؤية: ${dept.vision}\n` +
        `  - الرسالة: ${dept.mission}\n` +
        `  - مدة الدراسة: ${dept.duration}\n` +
        `  - مجالات العمل المتاحة للخريجين: ${dept.careers.join("، ")}\n` +
        `  - المقررات والمواد الرئيسية: ${dept.subjects.join("، ")}\n` +
        `  - رئيس القسم/المنسق: ${dept.headOfDept.name} (دور: ${dept.headOfDept.role})\n` +
        `  - كلمة رئيس القسم: "${dept.headWord}"\n` +
        `  - الأهداف التفصيلية ونواتج التعلم:\n${objectivesStr}`
      );
    });
  }

  // 2. Admissions and Fees (General & Specific)
  if (lowerQuery.includes("مصروفات") || lowerQuery.includes("مصاريف") || lowerQuery.includes("قبول") || lowerQuery.includes("شروط") || lowerQuery.includes("تقديم") || lowerQuery.includes("تنسيق") || lowerQuery.includes("رسوم")) {
    foundData = true;
    contextParts.push("### شروط القبول والتسجيل والمصروفات:");
    contextParts.push(
      "- **نظام الدراسة العام**: 4 سنوات بنظام الساعات المعتمدة للبرامج النوعية والبرامج العادية.\n" +
      "- **طريقة التقديم**: القبول يتم رسمياً عن طريق مكتب التنسيق المركزي للجامعات المصرية للطلاب المستجدين، أو التحويلات الورقية عن طريق إدارة شؤون الطلاب بالجامعة والكلية.\n" +
      "- **شروط القبول**: الحصول على شهادة الثانوية العامة أو ما يعادلها والوفاء بالحد الأدنى للقبول الذي يحدده مكتب التنسيق للكلية. (ملاحظة: تم إلغاء اختبارات القدرات للقبول).\n" +
      "- **المصروفات الدراسية**: يتم تحديد الرسوم والمصروفات للبرامج العادية والبرامج الخاصة (الساعات المعتمدة المميزة) في بداية كل عام دراسي من قبل مجلس الجامعة وإدارة الكلية.\n" +
      "- **الأوراق المطلوبة للتقديم (عادةً)**:\n" +
      "  1. أصل شهادة الثانوية العامة + صور منها.\n" +
      "  2. أصل شهادة الميلاد المميكنة (حديثة) + صور منها.\n" +
      "  3. عدد 6 صور شخصية حديثة (خلفية بيضاء).\n" +
      "  4. صورة بطاقة الرقم القومي للطالب وولي الأمر.\n" +
      "  5. نموذج 2 جند ونموذج 6 جند (للطلاب الذكور فقط لتأجيل التجنيد).\n" +
      "  6. إيصال دفع الرسوم الدراسية المقررة."
    );
  }

  // 3. Careers and Jobs matching
  if (lowerQuery.includes("مجالات العمل") || lowerQuery.includes("وظائف") || lowerQuery.includes("خريجين") || lowerQuery.includes("شغل") || lowerQuery.includes("مستقبل")) {
    foundData = true;
    contextParts.push("### مجالات وفرص العمل للخريجين حسب كل تخصص:");
    DEPARTMENTS.forEach((dept) => {
      contextParts.push(
        `- **${dept.title}**:\n` +
        `  * الوظائف المتاحة: ${dept.careers.join("، ")}\n` +
        `  * نواتج التعلم والمهارات المكتسبة التي تؤهل للعمل: ${dept.description}`
      );
    });
  }

  // 4. Library matching
  if (lowerQuery.includes("مكتبة") || lowerQuery.includes("كتاب") || lowerQuery.includes("استعارة") || lowerQuery.includes("قراءة") || lowerQuery.includes("مراجع")) {
    foundData = true;
    contextParts.push("### دليل مكتبة الكلية الشامل:");
    contextParts.push(
      `- **الاسم**: ${LIBRARY_INFO.title}\n` +
      `- **الوصف**: ${LIBRARY_INFO.description}\n` +
      `- **الرؤية والهدف**: ${LIBRARY_INFO.overview}\n` +
      `- **رؤية التطوير**: ${LIBRARY_INFO.vision}\n` +
      `- **القيم المهنية للمكتبة**: ${LIBRARY_INFO.values}\n` +
      `- **الأهداف الاستراتيجية للمكتبة**:\n` + LIBRARY_INFO.objectives.map(o => `  * ${o}`).join("\n") + "\n" +
      `- **الخدمات التي تقدمها للطلاب والباحثين**:\n` + LIBRARY_INFO.services.map(s => `  * ${s}`).join("\n") + "\n" +
      `- **مواعيد العمل**: ${LIBRARY_INFO.workingHours}\n` +
      `- **سياسة الدخول والتعامل مع الممتلكات**:\n` +
      `  * مقدمة: ${LIBRARY_INFO.policy.intro}\n` +
      `  * القواعد الصارمة داخل القاعة:\n` + LIBRARY_INFO.policy.rules.map(r => `    - ${r}`).join("\n") + "\n" +
      `  * عقوبات المخالفين: ${LIBRARY_INFO.policy.consequences}\n` +
      `- **المواد والمراجع غير القابلة للاستعارة الخارجية (للاطلاع الداخلي فقط)**:\n` + LIBRARY_INFO.nonBorrowable.map(nb => `  * ${nb}`).join("\n")
    );
  }

  // 5. Faculty Leadership matching
  if (lowerQuery.includes("عميد") || lowerQuery.includes("وكيل") || lowerQuery.includes("إدارة") || lowerQuery.includes("قيادة") || lowerQuery.includes("رئيس") || lowerQuery.includes("دكتور")) {
    foundData = true;
    contextParts.push("### الهيكل الإداري وقيادات كلية التربية النوعية:");
    FACULTY_LEADERSHIP.forEach((leader) => {
      contextParts.push(`- **${leader.role}**: أ.د. ${leader.name}`);
    });
    contextParts.push("\n### رؤساء الأقسام ومنسقو البرامج الأكاديمية:");
    DEPARTMENTS.forEach((dept) => {
      contextParts.push(`- **${dept.headOfDept.role}**: ${dept.headOfDept.name}`);
    });
  }

  // General Fallback context if asking about faculty in general
  if (contextParts.length === 0 && (lowerQuery.includes("كلية") || lowerQuery.includes("تربية نوعية") || lowerQuery.includes("نظام الدراسة") || lowerQuery.includes("مميزات") || lowerQuery.includes("معلومات"))) {
    foundData = true;
    contextParts.push("### معلومات عامة شاملة عن كلية التربية النوعية جامعة بنها:");
    contextParts.push(
      "- **الكلية**: كلية التربية النوعية بجامعة بنها، منارة للتعليم والبحث العلمي.\n" +
      "- **نظام الدراسة**: 4 سنوات دراسية.\n" +
      "- **الأقسام الأساسية والبرامج**:\n" +
      DEPARTMENTS.map(d => `  * ${d.title}: ${d.description}`).join("\n") + "\n" +
      "- **المميزات الاستراتيجية للكلية**:\n" +
      "  1. تدريب عملي مكثف في معامل مجهزة بأحدث التقنيات.\n" +
      "  2. نخبة من أعضاء هيئة التدريس والأكاديميين والخبراء.\n" +
      "  3. برامج نوعية مميزة مصممة خصيصاً لتناسب متطلبات سوق العمل المتجدد.\n" +
      "  4. اهتمام بالتحول الرقمي وتوظيف تكنولوجيا الذكاء الاصطناعي في التعليم والتربية الخاصة."
    );
  }



  return {
    query,
    context: contextParts.join("\n\n"),
    foundData,
  };
}
