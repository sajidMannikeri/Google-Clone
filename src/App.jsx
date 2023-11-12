import Header from "./components/Header";
import Footer from "./components/Footer";
import RouteComponenet from "./components/RouteComponenet";
import { useState, useEffect } from "react";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const url = 'https://google-search72.p.rapidapi.com/search?q=elon%20musk&num=10&start=0';
  const options = {
    method: "GET",
    headers: {
    },
  };

  const getResults = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getResults();
  }, []);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen">
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <RouteComponenet />
        <Footer />
      </div>
    </div>
  );
};

export default App;
