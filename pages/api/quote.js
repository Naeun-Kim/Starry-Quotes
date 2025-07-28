// pages/api/quote.js
export default async function handler(req, res) {
  try {
    const response = await fetch('https://zenquotes.io/api/random', {
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('[proxy] upstream error:', response.status, text);
      return res.status(response.status).send(text);
    }

    const data = await response.json();
    const item = Array.isArray(data) && data.length > 0 ? data[0] : null;
    if (!item) throw new Error('No quote returned');

    const quote = {
      content: item.q,
      author: item.a,
      tags: [], // ZenQuotes는 태그를 제공하지 않음
    };

    return res.status(200).json(quote);
  } catch (error) {
    console.error('Quote API Error:', error);
    res.status(500).json({
      content: 'Opps... Something went wrong',
      author: 'Error',
      tags: [],
    });
  }
}
