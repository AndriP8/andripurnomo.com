import { HiOutlineMail } from "react-icons/hi";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import FooterItem from "Footer/Footer.item";

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg font-bold">Find me on</p>
        <div className="flex items-center justify-center mt-3 mb-5">
          <FooterItem href="mailto:andri.adrp@gmail.com">
            <HiOutlineMail className="text-3xl mx-1 cursor-pointer" />
          </FooterItem>
          <FooterItem href="https://www.linkedin.com/in/andri-purnomo/">
            <AiOutlineLinkedin className="text-3xl mx-1 cursor-pointer" />
          </FooterItem>
          <FooterItem href="https://twitter.com/Andrikp3/">
            <AiOutlineTwitter className="text-3xl mx-1 cursor-pointer" />
          </FooterItem>
          <FooterItem href="https://github.com/andrip8/">
            <AiOutlineGithub className="text-3xl mx-1 cursor-pointer" />
          </FooterItem>
        </div>
        <p className="">© Andri Purnomo 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
