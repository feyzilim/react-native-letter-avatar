import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const LetterAvatar = ({ text, size, style, textStyle }) => {
    const firstLetter = text ? text.charAt(0).toUpperCase() : '';
    if (!size)
        size = 50;
    const fontSize = size / 2;
    return (<View style={[styles.circle, { width: size, height: size, borderRadius: size }, style]}>
      <Text style={[styles.letter, { fontSize: fontSize }, textStyle]}>{firstLetter}</Text>
    </View>);
};
const styles = StyleSheet.create({
    circle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    letter: {
        color: 'white'
    },
});
export default LetterAvatar;
