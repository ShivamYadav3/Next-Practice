"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const login = () => {
  return (
    <>
      <div>hello from login</div>

      <br />
      <br />
      <Link href="/login/loginstudent">student login by link tag</Link>
      <br />
      <br />
      <Link href="/login/loginteacher">teacher login by link tag</Link>
    </>
  );
};
export default login;
