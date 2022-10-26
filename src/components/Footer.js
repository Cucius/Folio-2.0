import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div
        className="fixed z-50 bottom-0  w-screen h-12
                 flex  justify-center 
                 bg-gray-500
                 shadow-lg"
      >
        <a href="http://github.com/Cucius" target={"_blank"}>
          <FooterIcon icon={<BsGithub size="18" />} text="GitHub" />
        </a>
        <a href="https://linkedin.com/in/chase-r-metherd/" target={"_blank"}>
          <FooterIcon icon={<BsLinkedin size="18" />} text="LinkedIn" />
        </a>
      </div>
    </>
  );
};

const FooterIcon = ({ icon, text }) => (
  <div className="footer-icon group">
    {icon}
    <span className="footer-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default Footer;
