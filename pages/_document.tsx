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
    return (
      <Html>
        <Head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="title" content="Starry Quotes" />
          <meta
            name="keywords"
            content="quotes, inspiration, inspirational quote"
          />
          <meta
            name="description"
            content="Starry Quotes - Quotes in the sky"
          />
          <meta name="author" content="Naeun Kim | naeun.off@gmail.com" />
          <meta name="copyright" content="Naeun Kim" />
          <meta name="robots" content="ALL" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Starry Quotes" />
          <meta
            property="og:url"
            content="https://starry-quotes.netlify.app/"
          />
          <meta property="og:site_name" content="Starry Quotes" />
          <meta property="og:description" content="Quotes in the sky" />
          <meta
            property="og:image"
            content="https://2019naeun.s3.ap-northeast-2.amazonaws.com/assets/images/starry-og.png"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Codystar&family=Roboto:ital,wght@1,100&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
