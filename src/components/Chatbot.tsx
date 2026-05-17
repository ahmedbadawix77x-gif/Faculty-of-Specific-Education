import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles, ChevronDown } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { retrieveContext } from "../services/ai/contentService";

export interface AIMessage {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "ما هي شروط القبول والأوراق المطلوبة للتسجيل؟",
  "كم تبلغ المصروفات الدراسية وطريقة الدفع؟",
  "ما هي الأقسام والبرامج المتاحة بالكلية؟",
  "ما هي مجالات وفرص العمل المتاحة للخريجين؟",
  "ما هي مميزات الدراسة في الكلية ومعلوماتها العامة؟",
  "من هم قيادات الكلية (العميد والوكلاء ورؤساء الأقسام)؟",
  "معلومات تفصيلية عن قسم تكنولوجيا التعليم والحاسب الآلي",
  "معلومات تفصيلية عن قسم الاقتصاد المنزلي",
  "معلومات تفصيلية عن قسم التربية الفنية",
  "معلومات تفصيلية عن قسم التربية الموسيقية",
  "معلومات تفصيلية عن قسم الإعلام التربوي",
  "معلومات تفصيلية عن قسم رياض الأطفال",
  "ما هو برنامج إعداد معلم التربية الخاصة المتميز؟",
  "ما هي قواعد المكتبة وشروط الاستعارة والاطلاع؟",
  "ما هي مواعيد عمل المكتبة والخدمات التي تقدمها للطلاب؟",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<AIMessage[]>([
    {
      id: "1",
      text: "أهلاً بك! أنا **Naway AI**، المساعد الذكي الرسمي لكلية التربية النوعية بجامعة بنها 🎓\nاختر أحد الأسئلة التالية وسأجيبك فوراً من قاعدة بيانات الكلية المعتمدة:",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim() || isTyping) return;

    const newUserMessage: AIMessage = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, newUserMessage]);
    setIsTyping(true);

    // Fake typing delay for a natural feel, then reply instantly using local static data!
    setTimeout(() => {
      const { context, foundData } = retrieveContext(text);
      let botResponseText = context;
      
      if (!foundData || !context) {
        botResponseText = "عذراً، لا تتوفر معلومات جاهزة حول هذا الاستفسار حالياً. يرجى مراجعة إدارة شؤون الطلاب للحصول على التفاصيل.";
      }
      
      const newBotMessage: AIMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 600);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("ar-EG", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-sky-400 to-sky-600 text-white rounded-full shadow-[0_8px_30px_rgba(14,165,233,0.3)] hover:shadow-[0_8px_30px_rgba(14,165,233,0.5)] transition-all flex items-center justify-center group"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={28} className="group-hover:animate-pulse" />
            <span className="absolute top-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-2rem)] h-[650px] max-h-[calc(100vh-4rem)] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col border border-gray-100 overflow-hidden"
            dir="rtl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-sky-500 to-sky-600 p-5 flex items-center justify-between text-white relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-inner">
                    <Bot size={26} className="text-white drop-shadow-md" />
                  </div>
                  <span className="absolute bottom-[-2px] left-[-2px] w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-lg tracking-wide drop-shadow-sm font-sans">Naway AI</h3>
                  <p className="text-xs text-sky-100 font-medium">كلية التربية النوعية</p>
                </div>
              </div>
              <div className="flex gap-2 relative z-10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors text-white/90 hover:text-white"
                >
                  <ChevronDown size={22} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 bg-[#F8FAFC] scroll-smooth space-y-6">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-3 ${
                      msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {msg.sender === "bot" ? (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center border border-sky-200 shadow-sm">
                          <Bot size={16} className="text-sky-600" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border border-gray-300 shadow-sm">
                          <User size={16} className="text-gray-600" />
                        </div>
                      )}
                    </div>

                    <div className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"} max-w-[85%]`}>
                      <div
                        className={`px-4 py-3 shadow-sm ${
                          msg.sender === "user"
                            ? "bg-gradient-to-br from-sky-400 to-sky-500 text-white rounded-2xl rounded-tr-sm"
                            : "bg-white border border-gray-100 text-gray-800 rounded-2xl rounded-tl-sm shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                        }`}
                      >
                        {msg.sender === "user" ? (
                          <p className="text-[14px] leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                        ) : (
                          <div className="prose prose-sm prose-sky max-w-none text-[14px] leading-relaxed rtl:prose-reverse prose-p:my-1 prose-ul:my-1 prose-ul:list-disc prose-ul:pl-0 prose-ul:pr-4 prose-li:my-0">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                              {msg.text}
                            </ReactMarkdown>
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] text-gray-400 mt-1.5 px-1 font-medium">
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center border border-sky-200 shadow-sm">
                    <Bot size={16} className="text-sky-600" />
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1 shadow-sm w-[70px] h-[40px]">
                    <motion.div className="w-2 h-2 bg-gray-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                    <motion.div className="w-2 h-2 bg-gray-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                    <motion.div className="w-2 h-2 bg-gray-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Static Options Area (Replacing Text Input) */}
            <div className="bg-white border-t border-gray-100 p-4 shrink-0 flex flex-col gap-2 shadow-[0_-10px_20px_rgba(0,0,0,0.02)] relative z-20">
              <p className="text-xs text-center text-gray-500 font-medium mb-1">الرجاء اختيار أحد الاستفسارات الشائعة المتاحة:</p>
              <div className="flex flex-wrap gap-2 justify-center max-h-[160px] overflow-y-auto pr-1 pb-1 custom-scrollbar">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(q)}
                    disabled={isTyping}
                    className="text-[13px] bg-sky-50/70 border border-sky-100 text-sky-700 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all px-3 py-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md text-right w-full font-medium"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
