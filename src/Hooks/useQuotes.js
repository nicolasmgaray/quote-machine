import { useEffect, useState } from "react";

const useQuotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getQuotes(setQuotes);
  }, []);

  return quotes;
};

const getQuotes = async (setQuotes) => {
  const url =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
  let response = await fetch(url);
  let data = await response.json();
  setQuotes(data.quotes);
};

export default useQuotes;
