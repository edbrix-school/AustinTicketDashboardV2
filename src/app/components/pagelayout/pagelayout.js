"use client";
import Top from "./top";
import Left from "./left";
import Head from "next/head";
import { Inter } from 'next/font/google'

const myInter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: "swap",
})

export default function Layout({ children, ...pageProps }) {
  return (
    <>
      <Head>
        <title>{pageProps.pageTitle ? pageProps.pageTitle : "Loading..."} | Welcome to Austin Asset Management</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const style = document.createElement('style')
              style.innerHTML = '@layer tailwind-base, primereact, tailwind-utilities;'
              style.setAttribute('type', 'text/css')
              document.querySelector('head').prepend(style)
            `,
          }}
        />
      </Head>
      <>
        <Top topTab={pageProps.topTab} pageTitle={pageProps.pageTitle} pageName={pageProps.pageName} parentPageName={pageProps.parentPageName} />         
        <Left />
        <div className={`${myInter.className} pl-[118px] xl:pl-[128px] pr-[32px] xl:pr-[1.667vw] pb-6 xl:pb-[1.25vw] `}>
          <main>
            {children}
          </main>
        </div>
      </>
    </>
  );
}
