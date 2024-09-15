import { StatusBar } from 'react-native'
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Header from './Header';
import SearchBar from './Searchbar';
import UserListItem from './UserListItem';

const imagePath = "../../assets/img";

function getRandomTimestamp() {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    const formattedHours = hours < 10 ? "0" + hours : hours;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${formattedHours}:${formattedMinutes}`;
}
const users = [
    {
        id: "1",
        name: "John Doe",
        lastMessage: "Hello, how are you?",
        timestamp: getRandomTimestamp(),
        profilePic: require(`${imagePath}/user1.jpeg`),
    },
    {
        id: "2",
        name: "Jane Smith",
        lastMessage: "Are you coming to the party?",
        profilePic: require(`${imagePath}/user2.jpeg`),
        timestamp: getRandomTimestamp(),
    },
    {
        id: "3",
        name: "Michael Johnson",
        lastMessage: "Did you see the match?",
        profilePic: require(`${imagePath}/user3.jpeg`),
        timestamp: getRandomTimestamp(),
    },
    {
        id: "4",
        name: "Emma Brown",
        lastMessage: "I sent you the report.",
        profilePic: require(`${imagePath}/user1.jpeg`),
        timestamp: getRandomTimestamp(),
    },
    {
        id: "5",
        name: "Oliver Jones",
        lastMessage: "What are your plans for the weekend?",
        profilePic: require(`${imagePath}/user2.jpeg`),
        timestamp: getRandomTimestamp(),
    },
    {
        id: "6",
        name: "Sophia Garcia",
        lastMessage: "Check out this article!",
        profilePic: require(`${imagePath}/user3.jpeg`),
        timestamp: getRandomTimestamp(),
    },
    {
        id: "7",
        name: "Lucas Martinez",
        lastMessage: "Are you free tonight?",
        profilePic: require(`${imagePath}/user1.jpeg`),
        timestamp: getRandomTimestamp(),
    },
    {
        id: "8",
        name: "Alex Carry",
        lastMessage: "What about a dinner tommorrow?",
        profilePic: require(`${imagePath}/user2.jpeg`),
        timestamp: getRandomTimestamp(),
    },
    {
        id: "9",
        name: "David Alaba",
        lastMessage: "Are you free tonight?",
        profilePic: require(`${imagePath}/user3.jpeg`),
        timestamp: getRandomTimestamp(),
    },
    {
        id: "10",
        name: "Jordi Anderson",
        lastMessage: "Bring both of them with!",
        profilePic: require(`${imagePath}/user1.jpeg`),
        timestamp: getRandomTimestamp(),
    },
];
const List = () => {
    const [searchText, setSearchText] = useState("");
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
        <SafeAreaView style={{ flex: 1, marginTop: 40 }}>
            <StatusBar barStyle={'dark-content'} />
            <Header />
            <SearchBar
                placeholder="Search..."
                onChangeText={(text) => setSearchText(text)}
            />
            <FlatList
                contentContainerStyle={{ paddingBottom: 200 }}
                data={filteredUsers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <UserListItem
                        name={item.name}
                        timestamp={item.timestamp}
                        lastMessage={item.lastMessage}
                        profilePic={item.profilePic}
                        onPress={() => console.log("User pressed:", item.name)}
                    />
                )}
            />
        </SafeAreaView>
    );
};
export default List;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});