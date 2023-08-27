"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./login.css";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <h1 className="head1">layout for all login pages this is fix</h1>
      <button onClick={() => router.push("/")}>home page by navigation</button>
      <Link href="/">homepage by link tag</Link>
      <div>{children}</div>
    </>
  );
};
export default Layout;
