import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import styles from "./Home.module.css"


export default function Home() {
  return (
    <div className='flex justify-center'>
      <div className={styles.container}>
        <Header />
        <Banner />
      </div>
    </div>

  );
}
