import React from "react";
import Body from "components/body/Body";
import Footer from "components/Footer";
import Hero from "components/hero/Hero";
import "components/Home/styles.scss";

function Home() {
  return (
    <div className="home">
      <div>
        <Hero />
      </div>
      <div>
        <Body />
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}

export default Home;
