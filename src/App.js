import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import Button from "./components/Button";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';



const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState("");

  const fetchNewQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
    setColor(getRandomColor());
  };

  useEffect(() => {
    fetchNewQuote();
  }, []);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <main className="flex justify-center items-center min-h-screen transition-colors duration-1000 " style={{ background: color }}>
      <div id="wrapper" className="text-center">
        <div id="quote-box" className="bg-white p-10 max-w-lg rounded-lg shadow-lg transition-colors duration-1000">
          <div style={{ color: color }}>
            <div className="flex flex-row">
              <FontAwesomeIcon icon={faQuoteLeft} size="xl"/>
              <div id="text" className="font-mono font-semibold text-[20px] pb-2" >
                {quote}
              </div>
            </div>
            <div id="author" className="flex justify-end items-center font-sans pb-6 pr-1">
              - {author}
            </div>
          </div>
          <div className="flex justify-between">
            <a
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
              target="__blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md text-white font-semibold"
              style={{ background: color }}
            >
              <i className="fab fa-twitter"></i>
            </a>
            <Button onClick={fetchNewQuote} color={color} />
          </div>
        </div>
      <Footer color={color}/>
      </div>
    </main>
  )
}

export default App  