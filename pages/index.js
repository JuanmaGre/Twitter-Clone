import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home () {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/twitter.ico" />
      </Head>
      
      <main className="bg-black min-h-screen flex max-w[1500] mx-auto">
        <Sidebar />
        {/* Side Bar */}
        
        {/* Feed */}

        {/* Widgets */}
        
        {/* Modal */}
      </main>

    </div>
  );
};
