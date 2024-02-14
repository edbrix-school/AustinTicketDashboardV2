import Top from "./top";
import Left from "./left";

export default function Layout({ children, ...pageProps }) {
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
