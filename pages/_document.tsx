import Document, { DocumentContext, Html, Main, NextScript, Head } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
  
}

export default MyDocument