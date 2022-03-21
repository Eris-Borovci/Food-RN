import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsInfo = ({ name, photo }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: photo }} style={styles.photo} />
        </View>
    );
};

const styles = StyleSheet.create({
    photo: {
        width: 300,
        height: 300,
        borderRadius: 20
    }
});

export default ResultsInfo;