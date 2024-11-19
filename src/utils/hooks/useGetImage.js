const useGetImage = (flagCode) => {
    // Create a url for the flags images
  return new URL(`../../assets/flags/${flagCode}.png`, import.meta.url).href;
};

export default useGetImage;
