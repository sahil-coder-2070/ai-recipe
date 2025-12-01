import { useEffect, useRef, useState } from "react";

const AiRecipe = () => {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "You are Chef‑Bot. Only answer cooking/recipe related questions. " +
        "If user asks anything else not related to cooking recipes, " +
        "politely respond: 'Sorry, I only give cooking recipes. Please ask about recipes.'",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [aiReady, setAiReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const checkReady = setInterval(() => {
      if (window.puter && window.puter.ai) {
        setAiReady(true);
        clearInterval(checkReady);
      }
    }, 300);
    return () => clearInterval(checkReady);
  }, []);

  const scrollToBottom = () => {
    const container = messagesContainerRef.current;
    if (!container) return;
    container.scrollTop = container.scrollHeight;
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async () => {
    const userMessage = inputValue.trim();
    if (!userMessage) return;

    if (!aiReady) {
      return;
    }

    const updated = [...messages, { role: "user", content: userMessage }];
    setMessages(updated);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await window.puter.ai.chat(updated);
      const reply =
        typeof response === "string"
          ? response
          : response.message?.content ?? "No reply received.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Error: ${error.message || "Something went wrong."}`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen max-w-4xl m-auto p-3">
      <div className="flex flex-col shadow-sm min-h-[80vh] md:min-h-[85vh] overflow-x-auto p-3 rounded-2xl bg-neutral-50 border-neutral-200 border items-center gap-5">
        <div className="w-full flex justify-center items-center pb-3 gap-3 border-b border-neutral-200">
          <h1 className="text-2xl md:text-xl font-medium tracking-tight text-center font-display flex-1 ">
            Chefy AI
          </h1>
          <div
            className={`px-4 py-1.5 rounded-full text-xs w-fit  ${
              aiReady
                ? "bg-green-500/20 text-green-600"
                : "bg-orange-500/20 text-orange-600"
            }`}
          >
            {aiReady ? "AI Ready" : "Waiting for AI"}
          </div>
        </div>
        <div
          ref={messagesContainerRef}
          className=" flex-1 w-full px-4 text-center overflow-y-auto max-h-[80vh]"
        >
          {messages.filter((msg) => msg.role !== "system").length === 0 && (
            <div className="bg-neutral-200/40 w-fit ml-auto text-right border border-neutral-100 shadow-neutral-400 shadow-xs rounded-2xl px-5 py-1 text-sm">
              Ask Your Fav recipe
            </div>
          )}
          {messages.map((msg, idx) => {
            if (msg.role === "system") return null;
            const isUser = msg.role === "user";
            return (
              <p
                key={idx}
                className={`p-3 m-2 rounded-2xl max-w-xs text-wrap ${
                  isUser
                    ? "bg-neutral-200/40 w-fit ml-auto text-right border border-neutral-100 shadow-neutral-400 shadow-xs px-5 py-1 text-sm"
                    : " min-w-xl mr-auto text-left px-5 py-1 text-sm"
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.content}</div>
              </p>
            );
          })}
          {isLoading && (
            <div className="p-3 m-2 rounded-2xl max-w-xs text-neutral-800">
              <div className="flex items-center gap-2">
                <div className="animate-spin w-4 h-4 border-2 border-black/30 border-t-black rounded-full"></div>
                <p>Thinking....</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 bg-white shadow-sm border border-neutral-200 w-full max-w-xl py-1.5 px-5 rounded-full">
          <input
            className="focus:outline-none focus:ring-0 w-full"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={
              aiReady ? "Type Your Recipe" : "Wait for ai to be ready"
            }
            disabled={!aiReady || isLoading}
          />
          <button
            onClick={sendMessage}
            className={`cursor-pointer hover:scale-95 transition-transform duration-200 bg-orange-600 rounded-full text-neutral-100 font-medium shadow-neutral-300 shadow-md border-neutral-300 border py-1.5 px-5`}
            disabled={!aiReady || isLoading || !inputValue.trim()}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin w-4 h-4 border-2 border-black/30 border-t-black rounded-full"></div>
                <p>Sending</p>
              </div>
            ) : (
              "Send"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiRecipe;
