import React, { useState, useEffect } from "react";

type QuoteProps = {
  content: string;
  author: string;
  tags: string[];
  frame?: boolean;
};

type QuoteContent = {
  content: string;
};

const Content = ({ setOrder, content }) => {
  let [delay, setDelay] = useState(4000);
  useEffect(() => {
    setTimeout(() => {
      setOrder(true);
    }, delay);
  }, [setOrder]);

  return (
    <div className="content">
      {content
        .trim()
        .split("")
        .map((text, i) => (
          <span style={{ animationDelay: `${0.07 * i}s` }} key={i}>
            {text}
          </span>
        ))}
    </div>
  );
};

const Quote = ({ content, author, tags, frame }: QuoteProps) => {
  const [order, setOrder] = useState(false);

  return (
    <div className={`quote ${frame ? "frame" : ""}`}>
      <Content setOrder={setOrder} content={content} />
      <div className={`author ${order ? "appear" : ""}`}>{author}</div>
      {tags && <div className="tag">{tags}</div>}
    </div>
  );
};

export default Quote;
