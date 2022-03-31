import Document, { DocumentContext, Html, Main, NextScript, Head } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/rocket_1f680.png" />
          <link href="http://fonts.cdnfonts.com/css/menlo" rel="stylesheet" />
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