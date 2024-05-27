import { View, Text, StyleSheet } from "react-native";

const SCProgramsScreen = () => {
    return (
        <View style={styles.container}>
            <Text
            style={styles.text}>
                SCProgramsScreen
            </Text>
        </View>
    );
};

export default SCProgramsScreen;

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

