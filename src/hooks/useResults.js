import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    setResults([]);

    try {
      const response = await yelp.get("/search", {
        // on params will be like /search?limit=50 ...
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Something went wrong!");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
