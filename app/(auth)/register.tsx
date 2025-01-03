import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import React, { useEffect } from 'react';
import { Link } from 'expo-router'; // Import Link

const Register = () => {
  const [fullName, setFullName] = React.useState(''); // State untuk menyimpan input full name
  const [email, setEmail] = React.useState(''); // State untuk menyimpan input email
  const [password, setPassword] = React.useState(''); // State untuk menyimpan input password
  const [confirmPassword, setConfirmPassword] = React.useState(''); // State untuk menyimpan input confirm password
  const [keyboardVisible, setKeyboardVisible] = React.useState(false); // State untuk melacak status keyboard

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    // Cleanup listeners on component unmount
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView 
      style={styles.container_utama} 
      behavior={Platform.OS === "android" ? "padding" : "height"} 
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      <ImageBackground 
        source={require('@/assets/images/img_backgroundLogin.png')} 
        style={styles.img_backgroundLogin}
      />

      <View style={styles.content}>
        <Image source={require('@/assets/images/img_registerContainer.png')} style={styles.loginContainer}/>

        <Text style={styles.text_register}>Register</Text>

        {/* Full Name Section */}
        <Text style={styles.text_fn}>Full Name*</Text>
        <TextInput 
          style={styles.input_fn}
          placeholder='Enter your fullname'
          placeholderTextColor='gray'
          value={fullName} // Menggunakan state fullName
          onChangeText={setFullName} // Update state ketika input berubah
        />

        {/* Email Section */}
        <Text style={styles.text_email}>Email*</Text>
        <TextInput 
          style={styles.input_gmail} 
          placeholder="Enter your email"
          placeholderTextColor="gray"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* Password Section */}
        <Text style={styles.text_password}>Password*</Text>
        <TextInput 
          style={styles.input_password} 
          placeholder="Enter your password"
          placeholderTextColor="gray"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        
        {/* Confirm Password Section */}
        <Text style={styles.text_conPwd}>Confirm Password*</Text>
        <TextInput 
          style={styles.input_conPwd} 
          placeholder="Confirm Password"
          placeholderTextColor="gray"
          secureTextEntry={true}
          value={confirmPassword} // Menggunakan state confirmPassword
          onChangeText={setConfirmPassword} // Update state ketika input berubah
        />

        {/* Sign Up Button */}
        {!keyboardVisible && (
          <Link href='/(tabs)/Home' asChild>
            <TouchableOpacity style={styles.btn_signIn1}>
              <Text style={styles.text_signIn1}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        )}

        {/* Conditional Rendering for "Don't Have an Account?" */}
        {!keyboardVisible && (
          <Text style={styles.text_dontHave}>
            Already have an Account? 
            <Link href='/login'>
              <Text style={styles.text_createNow}> Login</Text>
            </Link>
          </Text>
        )}

        {/* Conditional Rendering for "By Using" Text */}
        {!keyboardVisible && (
          <Text style={styles.text_byUsing}>
            By using Course Mastery, you agree to our 
            <Text style={styles.text_terms}> Terms of Service</Text> and 
            <Text style={styles.text_privacy}> Privacy Policy</Text>
          </Text>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container_utama: {
    flex: 1,
    position: 'relative',
  },

  img_backgroundLogin: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: -1, // Background should be behind other elements
  },

  content: {
    top: -35,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },

  text_register: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 250,
  },

  text_email: {
    fontSize: 13,
    position: 'absolute',
    left: 80,
    top: 380, // Update position based on the new order
  },

  text_password: {
    fontSize: 13,
    position: 'absolute',
    left: 80,
    top: 470, // Update position based on the new order
  },

  text_fn: {
    fontSize: 13,
    position: 'absolute',
    left: 80,
    top: 290, // Position for Full Name
  },

  text_conPwd:{
    position:'absolute',
    top:560,
    left:80,
  },

  input_conPwd:{
    width: '60%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    position: 'absolute',
    top: 580, // Update position based on the new order
    backgroundColor: 'white',
  },

  input_gmail: {
    width: '60%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    position: 'absolute',
    top: 400, // Update position based on the new order
    backgroundColor: 'white',
  },

  input_password: {
    width: '60%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    position: 'absolute',
    top: 490, // Update position based on the new order
    backgroundColor: 'white',
  },

  input_fn: {
    width: '60%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    position: 'absolute',
    top: 310, // Update position based on the new order
    backgroundColor: 'white',
  },

  btn_signIn1: {
    position: 'absolute',
    bottom: 120,
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 15,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text_signIn1: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },

  loginContainer: {
    position: 'absolute',
    top: 200,
  },

  text_dontHave: {
    position: 'absolute',
    bottom: 95,
  },

  text_createNow: {
    position: 'absolute',
    bottom: 234,
    color: 'blue',
  },

  text_byUsing: {
    textAlign: 'center',
    width: '70%',
    position: 'absolute',
    bottom: 20,
    color:'white',
  },

  text_terms: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  
  text_privacy: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Register;
