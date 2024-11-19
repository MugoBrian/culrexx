import { useEffect, useState } from "react";
import currencies from "../../data/fx.json";

export const useFetchCurrency = () => {
  // Track loading state
  const [loading, setLoading] = useState(true);
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
          flag: flagConversion(currency.currency),
          currency: currency?.currency,
          nameI18N: currency?.nameI18N,
          buy: currency?.exchangeRate.buy,
          sell: currency?.exchangeRate?.sell,
        }));

      setCurrencyData(transformedData);
      setLoading(false);
    };

    fetchCurrencyData();
  }, []); // Empty dependency array ensures this effect only runs once on mount

  return { currencyData, loading }; // Return both the data and loading state
};
