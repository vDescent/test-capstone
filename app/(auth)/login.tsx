import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import React, { useEffect } from 'react';
import { Link } from 'expo-router'; // Import Link

const Login = () => {
  const [email, setEmail] = React.useState(''); // State untuk menyimpan input email
  const [password, setPassword] = React.useState(''); // State untuk menyimpan input password
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
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} // Sesuaikan offset sesuai kebutuhan
    >
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      {/* Gambar background tetap di belakang dengan posisi absolut */}
      <ImageBackground 
        source={require('@/assets/images/img_backgroundLogin.png')} 
        style={styles.img_backgroundLogin}
      />

      <View style={styles.content}>
        <Image source={require('@/assets/images/img_loginContainer.png')} style={styles.loginContainer}/>

        <Text style={styles.text_login}>Login</Text>

        <Text style={styles.text_email}>Email*</Text>

        {/* Kotak Input Gmail */}
        <TextInput 
          style={styles.input_gmail} 
          placeholder="example@gmail.com"
          placeholderTextColor="gray"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail} // Menyimpan input email di state
        />

        <Text style={styles.text_password}>Password*</Text>
        <TextInput 
          style={styles.input_password} 
          placeholder="Enter password"
          placeholderTextColor="gray"
          secureTextEntry={true} // Sembunyikan karakter yang dimasukkan
          value={password}
          onChangeText={setPassword} // Menyimpan input password di state
        />

        {/* Kondisional Render Teks "Forgot Password?" */}
        {keyboardVisible ? (
          <Text style={styles.text_forgot2}>Forgot Password?</Text> // Teks saat keyboard muncul
        ) : (
          <Text style={styles.text_forgot1}>Forgot Password?</Text> // Teks saat keyboard tidak muncul
        )}

        {/* Tombol Sign In berdasarkan status keyboard */}
        {keyboardVisible ? (
          <Link href='/(tabs)/Home' asChild>
            <TouchableOpacity style={styles.btn_signIn2}>
              <Text style={styles.text_signIn2}>Sign In</Text>
            </TouchableOpacity>
          </Link>
        ) : (
          <Link href='/(tabs)/Home' asChild>
            <TouchableOpacity style={styles.btn_signIn1}>
              <Text style={styles.text_signIn1}>Sign In</Text>
            </TouchableOpacity>
          </Link>
        )}

        {/* Kondisional Render Teks Don't Have an Account */}
        {!keyboardVisible && (
          <Text style={styles.text_dontHave}>
            Don't Have an Account? 
            <Link href='/register'>
              <Text style={styles.text_createNow}> Create Now!</Text>
            </Link>
          </Text>
        )}

        {/* Kondisional Render untuk Teks By Using */}
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
    zIndex: -1, // Pastikan background berada di lapisan paling bawah
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Berada di atas gambar background
  },

  text_login: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 250,
  },

  text_email: {
    fontSize: 13,
    position: 'absolute',
    left: 80,
    top: 320,
  },

  text_password: {
    fontSize: 13,
    position: 'absolute',
    left: 80,
    top: 410,
  },

  text_forgot1: {
    position: 'absolute',
    right: 80,
    fontSize: 13,
    bottom: 320,
    zIndex: 999,
  },

  text_forgot2: {
    position: 'absolute',
    right: 80,
    fontSize: 13,
    bottom: 65, // Posisi yang sama untuk menjaga konsistensi
    zIndex: 999,
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
    top: 350,
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
    top: 440, // Sesuaikan posisi agar tidak bertabrakan dengan elemen lain
    backgroundColor: 'white',
  },

  btn_signIn1: {
    position: 'absolute',
    bottom: 260, // Sesuaikan posisinya di bawah teks Forgot Password
    backgroundColor: '#000', // Warna latar belakang
    borderRadius: 10,
    paddingVertical: 15, // Padding vertical untuk menambah tinggi kotak
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center', // Memusatkan konten secara vertikal
  },

  text_signIn1: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center', // Memusatkan teks secara horizontal
  },

  btn_signIn2: {
    position: 'absolute',
    bottom: 5, // Sesuaikan posisinya di bawah teks Forgot Password
    backgroundColor: '#000', // Warna latar belakang
    borderRadius: 10,
    paddingVertical: 15, // Padding vertical untuk menambah tinggi kotak
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center', // Memusatkan konten secara vertikal
  },

  text_signIn2: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center', // Memusatkan teks secara horizontal
  },

  loginContainer: {
    position: 'absolute',
    top: 200, // Tetap berada pada posisinya
  },

  text_dontHave: {
    position: 'absolute',
    bottom: 234,
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
    textDecorationLine:'underline',
  },
  
  text_privacy: {
    color: 'blue',
    textDecorationLine:'underline',
  },
});

export default Login;
