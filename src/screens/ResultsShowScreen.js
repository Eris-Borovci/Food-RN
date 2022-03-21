import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import yelp from "../api/yelp";
import Carousel from "react-native-snap-carousel";
import ResultsInfo from "../components/ResultsInfo";
import ResultsCallSms from "../components/ResultsCallSms";

const ResultsShowScreen = ({ navigation }) => {
  const carousel = useRef();
  const [result, setResult] = useState([]);
  const id = navigation.getParam("id");

  const getResult = async () => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getResult();
  }, []);

  if (result.length == 0) {
    return (
      <View style={[styles.container, { justifyContent: "center" }]}>
        <ActivityIndicator color={"black"} size={50} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ height: 300, marginTop: 20 }}>
        <Carousel
          ref={carousel}
          layout="default"
          loop={true}
          data={result.photos}
          sliderWidth={300}
          itemWidth={300}
          renderItem={({ item }) => {
            return <ResultsInfo name={result.name} photo={item} />;
          }}
        />
      </View>
      <Text style={styles.title}>{result.name}</Text>
      <ResultsCallSms phone={result.phone} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
  },
});

export default ResultsShowScreen;
