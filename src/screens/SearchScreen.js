import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  const [resultsReady, setResultsReady] = useState();

  const areResultsReady = () => {
    if (results.length == 0) {
      setResultsReady(false);
    } else {
      setResultsReady(true);
    }
  };

  React.useEffect(() => {
    areResultsReady();
  }, [results]);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {resultsReady ? null : <ActivityIndicator size="large" color="black" />}
      {/* <Text>You have { results.length } results</Text> */}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
        <ResultsList results={filterResultsByPrice("$$$$")} title="Expensive" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
