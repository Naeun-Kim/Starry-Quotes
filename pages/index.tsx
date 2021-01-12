import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Quote from "../components/Quote";

const Index: React.FC = () => {
  const [quote, setQuote] = useState(null);

  async function getQuote() {
    try {
      const response = await fetch(
        "https://api.quotable.io/random?maxLength=70"
      );
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setQuote(data);
    } catch (error) {
      console.error(error);
      setQuote({ content: "Opps... Something went wrong" });
    }
  }

  useEffect(() => {
    getQuote();
  }, []);

  if (!quote) return null;

  return (
    <div>
      <Layout>
        <Quote
          content={quote.content}
          author={quote.author}
          tags={quote.tags}
        />
      </Layout>
    </div>
  );
};

export default Index;
