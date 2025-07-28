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

  // async function getQuote() {
  //   try {
  //     const response = await fetch(
  //       'https://api.quotable.io/random?maxLength=70'
  //     );
  //     const { statusCode, statusMessage, ...data } = await response.json();
  //     if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
  //     setQuote(data);
  //   } catch (error) {
  //     console.error(error);
  //     setQuote({ content: 'Opps... Something went wrong' });
  //   }
  // }

  async function getQuote() {
    try {
      console.log('Fetching quote...'); // 디버깅용
      const response = await fetch(
        'https://api.quotable.io/random?maxLength=70',
        {
          timeout: 10000, // 타임아웃 설정
        }
      );
      console.log('Response status:', response.status); // 디버깅용

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Quote data:', data); // 디버깅용
      setQuote(data);
    } catch (error) {
      console.error('Quote fetch error:', error);
      setQuote({ content: 'Opps... Something went wrong' });
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
