"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigation = (uName) => {
    router.push(uName);
  };
  return (
    <main className={styles.main}>
      <h1>hello world</h1>
      <button onClick={() => router.push("/login")}>login</button>
      {/* 2 nd way by using function */}
      <button onClick={() => navigation("/login")}>login func</button>

      <button onClick={() => alert("button clicked")}>click me</button>
    </main>
  );
}
