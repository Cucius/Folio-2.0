import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      className="fixed z-50 bottom-0  w-screen h-12
                 flex flex-row  justify-center
                 bg-indigo-900
                 shadow-lg"
    >
      <FooterIcon icon={<BsGithub size="18" />} text="GitHub" />
      <FooterIcon icon={<BsLinkedin size="18" />} text="LinkedIn" />
    </div>
  );
};

const FooterIcon = ({ icon, text }) => (
  <div className="footer-icon group">
    {icon}
    <span className="footer-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default Footer;
