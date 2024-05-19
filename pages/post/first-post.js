import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import Alert from "../../components/alert";
export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>first post</title>
        </Head>
        <header>
          <Link href="/">back to home</Link>
          <Alert type="error">
            <p>I cant success</p>
            {/* <h1 className="greet">hello Next JS</h1> */}
          </Alert>
        </header>
        <main>
          <section>
            <p>this is a post page</p>
          </section>
        </main>
      </Layout>
      {/* 内置style */}
      <style jsx>{`
        .greet {
          color: red;
        }
      `}</style>
    </>
  );
}
