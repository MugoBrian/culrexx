const useGetImage = (flagCode) => {

return new URL(`../../assets/flags/${flagCode}.png`, import.meta.url).href
  
}

export default useGetImage