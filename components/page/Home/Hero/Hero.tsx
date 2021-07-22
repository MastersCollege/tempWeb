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
        <div className={styles.logo_container}>
          <div className={styles.logo}>
            <div className={styles.logo_img}>
              <Image
                src="/logo.svg"
                alt="logo"
                width={150}
                height={150}
                layout="responsive"
              />
            </div>
            <p>ESTD 1986</p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.text_logo}>
            <h3>PROFESSOR V. RAJAPPAN MEMORIAL</h3>
            <h1>
              MASTERS
              <br />
              COLLEGE
            </h1>
            <h2>THURAVOOR , CHERTHALA</h2>
          </div>
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
