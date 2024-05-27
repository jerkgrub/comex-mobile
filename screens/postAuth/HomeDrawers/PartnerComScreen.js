import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ImageBackground } from "react-native";
import { Dimensions } from "react-native";
const { height } = Dimensions.get("window");


const PartnerComScreen = () => {
    return (
        <ScrollView>
            <View style={{
                marginBottom: 40,
            }}>
            <ImageBackground 
                style={{
                    marginTop: -30,
                    height: height / 3,
                }}

                resizeMode="contain"
                source={require("../../../assets/images/barangay-header.png")}
                />
            <View>
                        <Text
                        style={{
                            marginTop: -10,
                            fontSize: 24,
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "#2a2aa5",
                            marginBottom: 20,
                        }}
                        >Adopted Barangays 🏠</Text>
            </View>

            {/* Adopted Barangays */}
            <View>
            <TouchableOpacity style={styles.Card}>
                <Text
                style={styles.BarangayLabel}
                >
                Barangay 51
                </Text>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity style={styles.Card}>
                <Text
                style={styles.BarangayLabel}
                >
                Barangay 52
                </Text>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity style={styles.Card}>
                <Text
                style={styles.BarangayLabel}
                >
                Barangay 53
                </Text>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity style={styles.Card}>
                <Text
                style={styles.BarangayLabel}
                >
                Barangay 54
                </Text>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity style={styles.Card}>
                <Text
                style={styles.BarangayLabel}
                >
                Barangay 56
                </Text>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity style={styles.Card}>
                <Text
                style={styles.BarangayLabel}
                >
                Barangay 197
                </Text>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity style={styles.Card}>
                <Text
                style={styles.BarangayLabel}
                >
                Barangay 198
                </Text>
            </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity style={styles.Card}>
                <Text
                style={styles.BarangayLabel}
                >
                Barangay 200
                </Text>
            </TouchableOpacity>
            </View>
        
        </View>    
        </ScrollView>
    );
};

export default PartnerComScreen;

const styles = StyleSheet.create({
    Card: {
        backgroundColor: '#f0f0f0', 
        borderRadius: 10, 
        margin: 7, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    BarangayLabel: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "#010106",
        padding: 10,
    }
});
