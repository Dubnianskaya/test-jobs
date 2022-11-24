import Link from "next/link";
import Head from "next/head";

const Error = () => {
    return (
      <>
      <Head>
      <title>Error</title>
      </Head>
      <Link href="/">Back home</Link>
      <h2>404</h2>
      <p>Something went wrong...</p>
      </>
    )
  }
  
export default Error;