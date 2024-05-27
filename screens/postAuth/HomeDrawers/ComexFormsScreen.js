import { View, Text, StyleSheet } from "react-native";

const ComexFormsScreen = () => {
    return (
        <View style={styles.container}>
            <Text
            style={styles.text}>
                ComexFormsScreen
            </Text>
        </View>
    );
};

export default ComexFormsScreen;

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

