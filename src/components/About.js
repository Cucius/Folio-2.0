import Photo from "../images/Me.jpg";

const About = () => {
  return (
    // <div className=" flex-shrink-0 snap-start z-20 bg-rose-600 w-screen h-screen flex items-center justify-center text-8xl clip-path-arrow">
    <div
      id="about"
      className="flex snap-start
                  items-center justify-center
                  bg-gradient-to-r from-moss to-veronese
                  w-screen h-screen"
    >
      <img className="object-scale-down h-48 w-96" src={Photo}/>
      <p className="text-4xl">Hello! My name is Chase and I was born and raised in Elizabeth, CO. Since a young age I have enjoyed learning how things work. I am certain that is what has drawn me to coding and where I am today. My biggest flaw is underestimating what it takes to accomplish my plans.</p>
    </div>
  );
};

export default About;
