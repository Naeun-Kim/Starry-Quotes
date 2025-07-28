import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Quote from '../components/Quote';

const Index = () => {
  const [quote, setQuote] = useState(null);

  const background = ['sunset', 'night', 'midnight'];
  const random = Math.floor(Math.random() * background.length);

  function useBodyClass(className) {
    useEffect(() => {
      document.body.classList.add(className);

      return function cleanup() {
        document.body.classList.remove(className);
      };
    }, []);
  }

  useBodyClass(`${background[random]}`);

  async function getQuote() {
    try {
      const response = await fetch('/api/quote');

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error('Quote fetch error:', error);
      setQuote({
        content: 'Opps... Something went wrong',
        author: 'Error',
        tags: [],
      });
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
