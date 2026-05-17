import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "./systemPrompt";
import { retrieveContext } from "./contentService";

export interface AIMessage {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export async function generateChatResponse(
  userQuery: string,
  chatHistory: AIMessage[]
): Promise<string> {
  try {
    // 1. Retrieve Context
    const { context, foundData } = retrieveContext(userQuery);

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

    if (!apiKey) {
      return "عذراً، لم يتم العثور على مفتاح **Gemini API**. يرجى عمل تحديث كامل لصفحة المتصفح (F5) أو إعادة تشغيل السيرفر بعد التأكد من وجود ملف `.env` المحتوي على المفتاح.";
    }

    const ai = new GoogleGenAI({ apiKey });

    // 2. Prepare Context
    const finalContext = foundData 
      ? context 
      : "لم يتم العثور على معلومات رسمية محددة في قاعدة البيانات حول هذا السؤال. يمكنك الإجابة بذكاء واحترافية وبشكل عام ودود مستخدماً معلوماتك العامة لمساعدة الطالب وتوجيهه بذكاء دون إشعاره بأنك لا تعرف، مع الإشارة بلطف إلى ضرورة مراجعة إدارة الكلية للمسائل الرسمية الإدارية الحساسة إن لزم الأمر.";


    // 3. Prepare Prompt
    const fullPrompt = `


${SYSTEM_PROMPT}

### CONTEXT DATA (Official University Data - STRICTLY ONLY USE THIS TO ANSWER):
${finalContext}

### USER QUESTION:

${userQuery}

### YOUR RESPONSE:
`;

    // 4. Call Gemini API
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: fullPrompt,
      config: {
        temperature: 0.1, // Low temperature for high accuracy and determinism
      }
    });

    return response.text || "عذراً، حدث خطأ أثناء توليد الرد.";
  } catch (error) {
    console.error("AI Service Error:", error);
    return "عذراً، حدث خطأ في الاتصال بالخادم. يرجى التأكد من اتصالك بالإنترنت والمحاولة لاحقاً.";
  }
}
