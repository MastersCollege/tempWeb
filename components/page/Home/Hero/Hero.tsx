import React from "react";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";
import Button from "../../../../components/global/Button";
import styles from "../../../../styles/components/page/home/Hero.module.scss";

// const getData = async () => {
//   const responce = await fetch("/api/data");
//   const data = await responce.json();
//   return getImages(data);
// };

// const getImages = (data: any) => {
//   data.map((image: any, index: number) => (
//     <Image src={image.image} alt={`poster_${index}`} key={index} />
//   ));
// };

// fetch("/api/data")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data));

const Hero = ({ ...args }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.logot}>
          <Image src="/logot.svg" alt="poster" width={459} height={157.84} />
        </div>

        <div className={styles.buttons}>
          <Button label="APPLY FOR ADMISSION" rank="primary" />
          <Button label="SEE AVAILABLE COURCES" />
        </div>
      </div>
      <div>
        <Image src="/p.jpg" alt="poster" width={711} height={1030} />
      </div>
    </div>
  );
};

export default Hero;
