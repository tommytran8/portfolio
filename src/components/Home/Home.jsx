import React from "react";
// import useDynamicText from "../../hooks/useDynamicText";
const Home = () => {
  const myIntros = ["Front-end Developer .", "Web Developer ."];
  // const dynamicIntro = useDynamicText(myIntros, 150, 1200);
  return (
    <div className="home">
      <h1>I am Tommy Tran</h1>
      <p>
        I am a{" "}
        <span>
          {/* {dynamicIntro}
          <span
            className={`typecursor ${
              myIntros.includes(dynamicIntro) ? "typecursor-blinking" : ""
            }`}
          >
            |
          </span> */}
          {myIntros[0]}
        </span>
      </p>
    </div>
  );
};

export default Home;
