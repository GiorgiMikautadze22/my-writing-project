import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Listings from "./components/Listings";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <Listings></Listings>
    </main>
  );
}
