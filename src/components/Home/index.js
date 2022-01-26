import React from "react";
import Body from "components/body/Body";
import Footer from "components/Footer";
import Header from "components/header/Header";
import "components/Home/styles.scss";

function Home() {
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
