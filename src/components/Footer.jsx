import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <p className="flex items-center justify-center">
        &copy; 2024 All rights reserved. Made with{" "}
        <FaHeart className="text-[#521516] ml-2" />
      </p>
    </div>
  );
};

export default Footer;
