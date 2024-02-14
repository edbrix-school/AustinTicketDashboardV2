import Top from "./top";
import Left from "./left";

export default function PageLayout({ children, ...pageProps }) {
  return (
    <>
      <Top />
      <Left />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}
