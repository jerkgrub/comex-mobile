import { View, Text, StyleSheet } from "react-native";

const NSTPScreen = () => {
    return (
        <View style={styles.container}>
            <Text
            style={styles.text}>
                NSTPScreen
            </Text>
        </View>
    );
};

export default NSTPScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        
    }
})

