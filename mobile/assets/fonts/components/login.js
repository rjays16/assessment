import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      if (!email.trim()) setEmailError(true);
      if (!password.trim()) setPasswordError(true);
      return;
    }
    
    setEmailError(false);
    setPasswordError(false);
    
    if (email === "example@example.com" && password === "password") {
      Alert.alert("Success", "Login Successful!");
    } else {
      Alert.alert("Error", "Invalid email or password!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={[styles.input, emailError && styles.inputError]}
        onChangeText={text => {
          setEmail(text);
          setEmailError(false); 
        }}
        value={email}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      {emailError && <Text style={styles.errorText}>Please enter your email.</Text>}
      
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={[styles.input, passwordError && styles.inputError]}
        onChangeText={text => {
          setPassword(text);
          setPasswordError(false); 
        }}
        value={password}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      {passwordError && <Text style={styles.errorText}>Please enter your password.</Text>}
      
      <Button
        title="Login"
        onPress={handleLogin}
        color="#007bff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: "#333333",
  },
  input: {
    height: 40,
    borderColor: '#007bff',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
