import React, { useState, useEffect } from "react";

// Example quotes array – you can add, remove, or reorder easily
const quotes = [
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
];

const QuoteWidget = () => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    // Pick a random quote on component mount
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className="bg-gradient-to-r text-white rounded-2xl shadow-lg p-6 w-full">
      <h2 className="text-md italic text-4xl pr-3">"{quote.text}"</h2>
      <p className="text-sm mt-2 text-right">— {quote.author}</p>
    </div>
  );
};

export default QuoteWidget;
