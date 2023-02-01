import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "@/pages/_layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Head>
      <title>Next presentation demo</title>
    </Head>
    <Component {...pageProps} />
  </Layout>
}
