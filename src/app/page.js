import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>New Project</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>
      {/* Font Size */}
      <div className="bg-[#333333] p-[15px] text-white text-[10px] sm:text-[18px] lg:text-[24px] 3xl:text-[2.604vw]">Login page</div>
      {/* Grid List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
        <div className="bg-[#cccccc] p-[15px]">sdfsdf</div>
        <div className="bg-[#cccccc] p-[15px]">sdfsdf</div>
        <div className="bg-[#cccccc] p-[15px]">sdfsdf</div>
        <div className="bg-[#cccccc] p-[15px]">sdfsdf</div>
      </div>
    </>
  );
}
