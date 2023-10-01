import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Show() {
  // list (quoteList) contains objects which contain quotes and authors.
  const quoteList = [
    {
      quote:
        "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse",
    },
    {
      quote:
        "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill",
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      quote:
        "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      author: "Robert Frost",
    },
    {
      quote: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale",
    },
    {
      quote: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {
      quote:
        "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
      author: "Michael Jordan",
    },
    {
      quote:
        "The most difficult thing is the decision to act, the rest is merely tenacity.",
      author: "Amelia Earhart",
    },
    {
      quote: "Every strike brings me closer to the next home run.",
      author: "Babe Ruth",
    },
    {
      quote:
        "Definiteness of purpose is the starting point of all achievement.",
      author: "W. Clement Stone",
    },
    {
      quote:
        "We must balance conspicuous consumption with conscious capitalism.",
      author: "Kevin Kruse",
    },
    {
      quote:
        "Life is what happens to you while you’re busy making other plans.",
      author: "John Lennon",
    },
    {
      quote: "We become what we think about.",
      author: "Earl Nightingale",
    },
    {
      quote:
        "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
      author: "Mark Twain",
    },
    {
      quote: "Life is 10% what happens to me and 90% of how I react to it.",
      author: "Charles Swindoll",
    },
    {
      quote:
        "The most common way people give up their power is by thinking they don’t have any.",
      author: "Alice Walker",
    },
    {
      quote: "The mind is everything. What you think you become.",
      author: "Buddha",
    },
    {
      quote:
        "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
    },
    {
      quote: "An unexamined life is not worth living.",
      author: "Socrates",
    },
    {
      quote: "Eighty percent of success is showing up.",
      author: "Woody Allen",
    }
  ];
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    // ... Add more colors as needed ...
  ];

  const [bgcolor, setBgcolor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  const [quote, setQuote] = useState(quoteList[0].quote);
  const [author, setAuthor] = useState(quoteList[0].author);

  const handleClick = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
    setBgcolor(randomColor);
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  };

  const styleBody = {
    backgroundColor: bgcolor,
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const styleBox = {
    color: bgcolor,
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center",
    width: "auto", // Change to "auto" for dynamic width based on content
    maxWidth: "80vw", // Set a maximum width for the box
    overflow: "hidden",
  };

  const styleText = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  const styleAuthor = {
    fontSize: "15px",
  };
  const styleTweet = {
    fontSize: "20px",
    fontWeight: "bold",
    padding: "5px",
    margin: "5px",
    display: "block",
  };
  const styleButton = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <body style={styleBody}>
      <div id="quote-box" style={styleBox}>
        <div id="text" style={styleText}>
          {quote}
        </div>
        <div id="author" style={styleAuthor}>
          - {author}
        </div>
        <a
          style={styleTweet}
          id="tweet-quote"
          href="https://twitter.com/intent/tweet"
          target="_top"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <button style={styleButton} id="new-quote" onClick={handleClick}>
          Show Quote
        </button>
      </div>
    </body>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Show />
  </React.StrictMode>
);
