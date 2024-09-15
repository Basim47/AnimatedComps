import { StyleSheet } from "react-native";

import List from "@components/SwipableRow/List";

export default function SwipableRows() {
    return (
        <List />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});