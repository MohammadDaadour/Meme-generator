import { useState, useEffect } from "react";
import axios from "axios";

 const GettingData = ( url ) => {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://api.memegen.link/templates${url}`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  console.log(Data);
  return { Data, isLoading };
};

export default GettingData;