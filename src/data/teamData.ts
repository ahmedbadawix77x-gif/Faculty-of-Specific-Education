export interface TeamMember {
  id: number;
  name: string;
  image: string;
  role?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 0, name: "د. مصطفى محجوب", role: "المشرف على فريق العمل", image: "images/team/mostafa_mahgoub.webp" },
  { id: 1, name: "أحمد بدوي رمضان", role: "طالب بحاسب آلي مميز العبور (المستوى الثاني) - ساعد في تصميم الويب سايت", image: "images/team/ahmed_badawy.webp" },
  { id: 2, name: "أحمد جمال شعبان", role: "طالب بحاسب آلي مميز العبور (المستوى الثاني) - ساعد في تصميم مونتاج الفيديوهات", image: "images/team/ahmed_gamal.webp" },
  { id: 3, name: "دعاء سمير الدسوقي على موسى", image: "images/team/doaa_samir.webp" },
  { id: 4, name: "روفيدا طارق محمد يوسف", image: "images/team/roufaida_tarek.webp" },
  { id: 5, name: "زينب السيد مغربي عامر", image: "images/team/zeinab_elsayed.webp" },
  { id: 6, name: "حمدي هاشم محمد السعيد", image: "images/team/hamdy_hashem.webp" },
  { id: 7, name: "أمانى عماد عبد الحليم", image: "images/team/amany_emad.webp" },
  { id: 8, name: "صفا السيد شعبان محمود", image: "images/team/safa_elsayed.webp" },
  { id: 9, name: "ريهام خالد عفيفي سليم", image: "images/team/reham_khaled.webp" },
  { id: 10, name: "مصطفى فرج مصطفى", image: "images/team/mostafa_farag.webp" },
  { id: 11, name: "اماني السيد حسين طه", image: "images/team/amany_elsayed.webp" },
  { id: 12, name: "عزه نور عبدالهادي سليمان", image: "" }
];
