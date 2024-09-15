import { StatusBar } from "react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Accordion } from "@components/Accordians/Accordian";
import Header from "@components/Accordians/Header";
import { faqs } from "@components/Accordians/data";

export default function Accordians() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Header />

                {/* FAQs */}
                {faqs.map((item) => {
                    return (
                        <Accordion
                            key={item.id}
                            title={item.title}
                            description={item.description}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 12,
        backgroundColor: "#151515",
    },
    contentContainer: {
        paddingTop: 80,
        gap: 10,
        paddingHorizontal: 16,
        paddingBottom: 100,
    },
    title: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 20,
    },
    subTitle: {
        color: "#585c5c",
    },
});