const Github = require("../icons/github (1).png");
const FaceBook = require("../icons/facebook (1).png");
const LinkedIn = require("../icons/linkedin.png");
const Footer = () => {
  return (
    <div className="flex justify-around items-center p-5 mt-20 sm:mt-10 bg-[#242423]">
      <p className="text-white">©Mohammad Daadour 2023</p>
      <div className="flex">
      <a href="https://github.com/MohammadDaadour"><img className="w-[35px] ml-4" src={Github} alt="github link" /></a>
      <a href="https://www.facebook.com/senior.ddr/"><img className="w-[35px] ml-4" src={FaceBook} alt="facebook link" /></a>
      <img className="w-[35px] ml-4" src={LinkedIn} alt="linkedin link" />
      </div>
    </div>
  );
};
export default Footer;
