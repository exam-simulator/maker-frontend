import Head from 'next/head'
import formatTitle from '../../lib/formatTitle'
import formatOpenGraph from '../../lib/formatOpenGraph'

export default ({ pathname }) => {
  const og = formatOpenGraph()
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" type="image/x-icon" href="static/favicon.ico" />
      <title>Exam Maker | {formatTitle(pathname)}</title>
      <meta property="og:image:height" content="326" />
      <meta property="og:image:width" content="622" />
      <meta property="og:title" content={og.title} />
      <meta property="og:description" content={og.description} />
      <meta property="og:url" content={og.url} />
      <meta property="og:image" content={og.image} />
    </Head>
  )
}
