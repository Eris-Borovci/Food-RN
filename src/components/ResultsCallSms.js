import React from 'react';
import { View, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const ResultsCallSms = ({ phone }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity 
            style={styles.iconContainer}
            onPress={() => Linking.openURL(`tel:${phone}`)}
        >
            <FontAwesome
                name="phone"
                size={40}
                style={styles.icon}
            />
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.iconContainer}
            onPress={() => Linking.openURL(`sms:${phone}`)}
        >
            <MaterialIcons 
                name="sms"
                size={40}
                style={styles.icon}
            />
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
        marginHorizontal: 20
    },
    icon: {
        alignSelf: 'center',
    }
});

export default ResultsCallSms;