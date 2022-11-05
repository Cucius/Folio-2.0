import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      {/* <div className="relative flex-shrink-0 snap-start bg-amber-600 w-screen h-screen flex items-center justify-center text-8xl clip-path-arrow"> */}
      <div
        id="home"
        className="flex snap-start
                    items-center justify-center
                  bg-gradient-to-tr from-Baltic to-veronese text-8xl
                    w-screen h-screen"
      >
        <div className="container mx-auto">
          <h1>Hello World!</h1>
        
        </div>
      </div>
      {/* <div className=" flex text-6xl bg-teal-600 flex-shrink-0 h-screen w-screen justify-center" /> */}
    </React.Fragment>
  );
};

export default Home;
