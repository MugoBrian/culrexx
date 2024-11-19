import { useEffect, useState } from "react";
import currencies from "../../data/fx.json";

export const useFetchCurrency = () => {
  const [currencyData, setCurrencyData] = useState([
    {
      flag: "ke",
      currency: "KES",
      nameI18N: "Kenya",
      buy: 24,
      sell: 25,
    },
  ]);

  const flagConversion = (currencyFlag) =>
    currencyFlag.toLowerCase().substring(0, 2);

  useEffect(() => {
    const fetchCurrencyData = () => {
      const transformedData = currencies.fx
        .filter(
          (currency) =>
            currency.exchangeRate && currency.flags && currency.nameI18N
        )
        .map((currency) => ({
          flag:
            currency?.flags[0] === "provided"
              ? flagConversion(currency.currency)
              : "No Flag Available",
          currency: currency?.currency,
          nameI18N: currency?.nameI18N,
          buy: currency?.exchangeRate.buy,
          sell: currency?.exchangeRate?.sell,
        }));

      setCurrencyData(transformedData);
    };

    fetchCurrencyData();
  }, []); // Empty dependency array ensures this effect only runs once on mount

  return currencyData; // Return both the data and loading state
};
