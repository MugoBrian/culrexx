import { useFetchCurrency } from "../utils/hooks/useFetchCurrency";
import Pagination from "./Pagination";
import CurrencyCard from "./CurrencyCard";
import { useEffect, useState, useCallback } from "react";
import Search from "./Search";

const CurrencyList = () => {
  const currencyData = useFetchCurrency();
  const [currentData, setCurrentData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Initialize filteredData when currencyData changes
  useEffect(() => {
    setFilteredData(currencyData);
  }, [currencyData]);

  const handleSearch = useCallback(
    (term) => {
      if (!term) {
        setFilteredData(currencyData);
        return;
      }

      const lowerCaseTerm = term.toLowerCase();
      const filtered = currencyData.filter((item) =>
        item.currency.toLowerCase().includes(lowerCaseTerm)
      );
      setFilteredData(filtered);
    },
    [currencyData]
  );

  return (
    <div className="mt-24 mb-16">
      <div>
        <Search onSearch={handleSearch} />
      </div>
      <div className="mt-20 mb-10 flex justify-center items-center">
        <h6 className="text-white text-2xl justify-center tracking-[0.64px]">
          List of Currencies
        </h6>
      </div>

      <div className="flex flex-col gap-6">
        {currentData.map((currency) => (
          <CurrencyCard key={currency.currency} currencyData={currency} />
        ))}
      </div>
      <div>
        <Pagination data={filteredData} onPageChange={setCurrentData} />
      </div>
    </div>
  );
};

export default CurrencyList;
