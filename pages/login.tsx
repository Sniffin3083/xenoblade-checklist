import Head from 'next/head';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main className="grid place-items-center h-screen font-bold">
        <div className="text-center">
          <h1 className="text-5xl">Login</h1>
          <h2 className="text-3xl pt-3">Login to your account</h2>
        </div>
      </main>
    </>
  );
}