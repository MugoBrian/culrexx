import PropTypes from "prop-types";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
// const flagContext = require.context("../../assets/flags", false, /\.png$/);
const CurrencyCard = ({ currencyData }) => {
  // Dynamically import all flag images
  // Function to get flag image by currency code
  // const flagImage = flagContext(currencyData.flag); // Get the flag image dynamically

  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#f9f9f9] flex flex-col sm:flex-row gap-6 sm:gap-14 justify-between rounded-xl p-2 items-center w-full max-w-3xl">
        <div className="flex flex-row items-center">
          <img
            src={import("../assets/flags/ke.png")}
            alt="Flag"
            className="rounded-full object-cover w-12 h-12 border border-[#505050]"
          />
          <p className="text-xl pl-2">{currencyData.nameI18N}</p>
        </div>
        <div>
          <p className="text-[#505050]">{currencyData.currency}</p>
        </div>
        <div className="gap-2 flex flex-row">
          <div className="flex flex-row">
            <FaCaretUp style={{ color: "#122F12" }} className="size-6" />
            <p className="pl-1">{currencyData.buy}</p>
          </div>
          <div className="flex flex-row">
            <FaCaretDown
              style={{ color: "#521516", width: "24px", height: "24px" }}
            />
            <p className="pl-1">{currencyData.sell}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCard;

CurrencyCard.propTypes = {
  currencyData: PropTypes.shape({
    flag: PropTypes.string.isRequired,
    nameI18N: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    buy: PropTypes.number.isRequired,
    sell: PropTypes.number.isRequired,
  }).isRequired,
};