import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles, ChevronDown } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { generateChatResponse, AIMessage } from "../services/ai/aiService";

const SUGGESTED_QUESTIONS = [
  "ما هي شروط القبول بالكلية؟",
  "ما الفرق بين قسم تكنولوجيا التعليم والحاسب؟",
  "كم تبلغ مصروفات البرامج الخاصة؟",
  "ما هي مجالات العمل المتاحة للخريجين؟",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<AIMessage[]>([
    {
      id: "1",
      text: "أهلاً بك! أنا **Naway AI**، المساعد الذكي الرسمي لكلية التربية النوعية بجامعة بنها 🎓\nكيف يمكنني مساعدتك اليوم؟",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const newUserMessage: AIMessage = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      // Call AI Service
      const botResponseText = await generateChatResponse(text, messages);
      
      const newBotMessage: AIMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, newBotMessage]);
    } catch (error) {
      const errorMessage: AIMessage = {
        id: (Date.now() + 1).toString(),
        text: "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
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

              {/* Suggested Questions removed from here, moving to input area */}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area with Persistent Suggestions */}
            <div className="bg-white border-t border-gray-100 shrink-0 flex flex-col">
              {/* Persistent Suggestions */}
              <div className="flex gap-2 overflow-x-auto p-3 scrollbar-hide border-b border-gray-50/50" dir="rtl" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(q)}
                    disabled={isTyping}
                    className="whitespace-nowrap text-[13px] bg-sky-50/50 border border-sky-100 text-sky-700 hover:bg-sky-100 hover:border-sky-200 transition-all px-4 py-1.5 rounded-full flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 pt-3">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage(inputValue);
                  }}
                  className="relative flex items-center gap-2"
                >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="اكتب سؤالك هنا..."
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-full pl-14 pr-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 focus:bg-white transition-all"
                  dir="rtl"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute left-1.5 top-1.5 bottom-1.5 w-11 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 disabled:opacity-40 disabled:hover:bg-sky-500 transition-all shadow-md"
                >
                  <Send size={18} className="rtl:-ml-1" />
                </button>
              </form>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
