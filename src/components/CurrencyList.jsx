import { useFetchCurrency } from "../utils/hooks/useFetchCurrency";
import Pagination from "./Pagination";
import CurrencyCard from "./CurrencyCard";
import { useState, useCallback } from "react";
import Search from "./Search";

const CurrencyList = () => {
  const { currencyData, loading } = useFetchCurrency();
  const [currentData, setCurrentData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // currencyData is an arrya of objects of all the currencies returned by the useFetchCurrency hook.

  const handleSearch = useCallback(
    // term passed from onSearch prop in the Search component.
    (term) => {
      // if no search term specified filteredData will be set to currencyData
      if (!term) {
        setFilteredData(currencyData);
        return;
      }

      // set term to lowercase, filter an individual currency by its currency and set result to filteredData.
      const lowerCaseTerm = term.toLowerCase();
      const filtered = currencyData.filter((item) =>
        item.currency.toLowerCase().includes(lowerCaseTerm)
      );
      setFilteredData(filtered);
    },
    [currencyData] // the memoized function reruns whenever currencyData is updated.
  );

  return (
    <div className="mt-16 mb-8">
      <div className="sticky top-0 p-4 mb-20">
        {/* Pass handleSearch memoized function as a prop  */}
        <Search onSearch={handleSearch} />
      </div>
      <div className="mb-10 flex justify-center items-center">
        <h6 className="text-white text-2xl justify-center tracking-[0.64px]">
          List of Currencies
        </h6>
      </div>

      <div className="flex flex-col gap-6">
        {loading ? (
          <p className="text-lg font-medium text-gray-700">
            Loading, please wait...
          </p>
        ) : (
          currentData.map((currency) => (
            <CurrencyCard key={currency.currency} currencyData={currency} />
          ))
        )}
      </div>
      <div>
        
        {/* props data is set to filteredData and function setCurrentData is passed to set currentData whenever it changes */}
        <Pagination data={filteredData} onPageChange={setCurrentData} />
      </div>
    </div>
  );
};

export default CurrencyList;
