import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    const background = ["sunset", "night", "midnight"];
    const random = Math.floor(Math.random() * background.length);
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Codystar&family=Roboto:ital,wght@1,100&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className={`sky-color ${background[random]}`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
