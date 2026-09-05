import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validate fields
    if (!email || !password) {
      Alert.alert('Login Error', 'Please enter your email and password.');
      return;
    }

    // Validate email
    if (!email.includes('@')) {
      Alert.alert('Login Error', 'Please enter a valid email address.');
      return;
    }

    // Validate password
    if (password.length < 6) {
      Alert.alert(
        'Login Error',
        'Password must be at least 6 characters.'
      );
      return;
    }

    // Login successful
    Alert.alert('Success', 'Login successful!', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Home'),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>StudyBuddy</Text>

      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>
        Log in to continue your learning journey
      </Text>

      {/* Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Login Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* Signup Link */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.signupText}>
          Don't have an account?{' '}
          <Text style={styles.signupLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },

  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#10B981',
    textAlign: 'center',
    marginBottom: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#12263A',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#64748B',
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 15,
  },

  loginButton: {
    backgroundColor: '#10B981',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  signupText: {
    textAlign: 'center',
    marginTop: 22,
    color: '#64748B',
    fontSize: 15,
  },

  signupLink: {
    color: '#10B981',
    fontWeight: 'bold',
  },
});
