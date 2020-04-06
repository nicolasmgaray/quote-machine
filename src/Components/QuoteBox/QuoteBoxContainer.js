import React, { useState, useEffect } from "react";
import QuoteBox from "./QuoteBox";
import useQuotes from "../../Hooks/useQuotes";
import useRandomColor from "../../Hooks/useRandomColor";

const QuoteBoxContainer = () => {
  const quotes = useQuotes();
  useRandomColor("--main-color");
  const [currentQuote, setCurrentQuote] = useState({});

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
  if (quotes.length === 0) return {};
  return quotes[Math.floor(Math.random() * quotes.length)];
};

export default QuoteBoxContainer;
