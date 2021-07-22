import Layout from "../components/page/Layout";
import Hero from "../components/page/Home/Hero";
import styles from "../styles/pages/Home.module.scss";

type props = {};

interface _props {
  header_props?: props;
  main_props?: props;
  footer_props?: props;
}

const Home = (header_props = {}, main_props = {}, footer_props = {}) => {
  const layout = (
    <div className={styles.home}>
      <Hero />
    </div>
  );

  return (
    <Layout
      main={layout}
      header_props={header_props}
      footer_props={footer_props}
      main_props={main_props}
    />
  );
};

export default Home;
