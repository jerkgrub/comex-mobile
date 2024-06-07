import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { PasswordInput } from "../../components/PasswordInput";
import { LargeSize } from "../../components/Constants";
import SocialsLogin from "../../components/SocialsLogin";
import axios from "axios";
import DepInput from "../../components/DepInput";
import UserInput from "../../components/UserInput";
import DateInput from "../../components/DateInput";

const { height } = Dimensions.get("window");
export const UserContext = React.createContext();

export function UserProvider({ children }) {
  const [user, setUser] = React.useState({ email: "", password: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

const RegisterScreen = ({ navigation }) => {
  const { setUser } = React.useContext(UserContext);
  const [thePassword, setThePassword] = useState("");
  const [thePassword2, setThePassword2] = useState("");
  const [u_fname, setUFname] = useState("");
  const [u_mname, setUMname] = useState("");
  const [u_lname, setULname] = useState("");
  const [u_mnum, setUMnum] = useState("");
  const [u_dep, setUDep] = useState("");
  const [u_studnum, setUStudnum] = useState("");
  const [u_datehired, setUDateHired] = useState("");
  const [email, setEmail] = useState("");
  const [usertype, setUsertype] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.nu-moa\.edu\.ph$/;
    return regex.test(email);
  };

  const getValidUsertype = (input) => {
    const validUsertypes = ["student", "faculty", "staff"]; // Replace with actual valid user types
    return validUsertypes.includes(input.toLowerCase())
      ? input.toLowerCase()
      : null;
  };

  const gotoLogin = () => {
    setError(""); // Clear previous errors
    console.log("Attempting registration with the following data:", {
      usertype,
      u_fname,
      u_mname,
      u_lname,
      u_mnum,
      u_dep,
      u_studnum,
      u_datehired,
      email,
      password: thePassword,
    });

    const validUsertype = getValidUsertype(usertype);
    if (!validUsertype) {
      setError("Invalid user type.");
      return;
    }

    if (thePassword !== thePassword2) {
      setError("Passwords do not match.");
      return;
    }

    if (thePassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Email must end with '@nu-moa.edu.ph'");
      return;
    }

    if (validUsertype === "student" && !u_studnum) {
      setError("Student number is required.");
      return;
    }

    const newUser = {
      usertype: validUsertype,
      u_fname,
      u_mname,
      u_lname,
      u_mnum,
      u_dep,
      u_studnum,
      u_datehired,
      email,
      password: thePassword,
    };

    axios
      .post("http://192.168.1.170:8000/api/acc/new", newUser)
      .then((response) => {
        console.log("API Response:", response.data);
        if (response.data.newAcc) {
          alert("Registration successful");
          setUser({ email, password: thePassword });
          navigation.navigate("Login", { email, password: thePassword });
        } else {
          setError(response.data.message || "Registration failed");
        }
      })
      .catch((error) => {
        setError("An error occurred. Please try again.");
        console.error("API Error:", error);
      });
  };

  const gotoLogin2 = () => {
    navigation.navigate("Login", { email: "", password: "" });
  };

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <Text style={styles.title}>Create Your Account</Text>
        </View>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <View style={{ marginVertical: 5 }}>
          <UserInput value={usertype} setValue={setUsertype} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor={"#818181"}
            value={u_fname}
            onChangeText={(text) => setUFname(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Middle Name"
            placeholderTextColor={"#818181"}
            value={u_mname}
            onChangeText={(text) => setUMname(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor={"#818181"}
            value={u_lname}
            onChangeText={(text) => setULname(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor={"#818181"}
            value={u_mnum}
            onChangeText={(text) => setUMnum(text)}
            style={styles.input}
          />
          <DepInput value={u_dep} setValue={setUDep} />

          <TextInput
            placeholder="Student Number"
            placeholderTextColor={"#818181"}
            value={u_studnum}
            onChangeText={(text) => setUStudnum(text)}
            style={styles.input}
          />

          <DateInput
            value={u_datehired}
            setValue={setUDateHired}
            placeholder={"Date Hired"}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={"#818181"}
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <PasswordInput
            placeholder="Password"
            value={thePassword}
            setValue={setThePassword}
          />
          <PasswordInput
            placeholder="Confirm Password"
            value={thePassword2}
            setValue={setThePassword2}
          />
        </View>

        <View>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot your Password?</Text>
          </TouchableOpacity>
        </View>

        <Text
            style={{
              fontSize: 15,
              color: "black",
              textAlign: "center",
            }}
            className="mt-2"
          >
            By clicking Register, you are agreeing to COMEX CONNECT's <Text className="text-blue-500">Terms of Service.</Text>
          </Text>

        <TouchableOpacity onPress={gotoLogin} style={styles.registerButton}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={gotoLogin2} style={styles.loginLink}>
          <Text style={styles.loginText}>Already have an account?</Text>
        </TouchableOpacity>
      </View>

      

      <ImageBackground
        style={{ height: height / 3.9 }}
        resizeMode="contain"
        source={require("../../assets/images/register-header.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 15,
    padding: 18,
    backgroundColor: "#e7e7e7",
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: LargeSize,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2a2aa5",
    marginTop: 30,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
  forgotText: {
    fontSize: 12,
    alignSelf: "flex-end",
  },
  registerButton: {
    backgroundColor: "#2a2aa5",
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  loginLink: {
    paddingVertical: 0,
    borderRadius: 10,
    marginVertical: 20,
  },
  loginText: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RegisterScreen;
