import React, { useState, useEffect } from "react";
import QuoteBox from "./QuoteBox";
import useQuotes from "../../hooks/useQuotes";
import useRandomColor from "../../hooks/useRandomColor";

const QuoteBoxContainer = () => {
  const quotes = useQuotes();
  useRandomColor("--main-color");
  const [currentQuote, setCurrentQuote] = useState({quote:"", author:""});

  // Select a random quote, when quotes loaded
  useEffect(() => {
    setCurrentQuote(getRandomQuote(quotes));
  }, [quotes]);

  // ChangeQuote on demand
  const changeQuote = () => {
    setCurrentQuote(getRandomQuote(quotes));
  };

  return <QuoteBox quote={currentQuote} changeQuote={changeQuote}></QuoteBox>;
};

// Randomly select a quote, from quotes array
const getRandomQuote = (quotes) => {
  if (quotes.length === 0) return {quote:"", author:""};
  return quotes[Math.floor(Math.random() * quotes.length)];
};

export default QuoteBoxContainer;
