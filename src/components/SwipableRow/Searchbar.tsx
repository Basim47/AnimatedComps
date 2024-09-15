import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Feather from 'react-native-vector-icons/Feather'

interface SearchBarProps {
    placeholder: string;
    onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onChangeText }) => {
    return (
        <View style={styles.container}>
            <Feather name="search" size={20} color="gray" />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={'grey'}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        height: 40,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        margin: 10,
    },
    input: {
        marginLeft: 5,
        fontSize: 16,
        flex: 1,
        color: 'black'
    },
});

export default SearchBar;