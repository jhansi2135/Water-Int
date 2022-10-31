import { useState, useEffect } from "react";
import "./RandomQuotes.css";

const quotes = [
  '"Drink water slowly & sip by sip"',
  '"Drink water while sitting properly"',
  '"Thank God"',
  '"Drink your water in a glass"',
  '"Have your water in 3 sips"',
];
export function RandomQuotes() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * 5)]);
  }, []);

  return <p className="style">{quote}</p>;
}
