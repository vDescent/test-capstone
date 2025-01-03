import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import { Link, useRouter, useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';


const Payment3 = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const router = useRouter();

  return (
    <ImageBackground 
      source={require('@/assets/images/img_backgroundPayment.png')} 
      style={styles.background}
    >
      <View style={styles.container}>

          {/* Kotak yang berisi teks */}
          <View style={styles.box}>
            <View style={styles.boxJudul}>
              <Text style={styles.textJudul}>Transaction Details</Text>
            </View>
            <Text style={styles.textPay}>Payment</Text>

            {/* Teks tambahan */}
            <Text style={styles.textDetail}>Apple Inc.</Text>
            <Text style={styles.textDetail}>Batch 1 Data Science</Text>
            <View style = {styles.boxLogo}>
            <Image source={require('@/assets/images/icon_logo.png')} style = {styles.img_logo}/>
            <View style = {styles.garisVer}></View>
            <Image source={require('@/assets/images/img_logoGopay.png')} style = {styles.img_logo}/>
            </View>
            <Text style={styles.textDetail}>Terms & Conditions : </Text>
            <Text style={styles.textDetailTerms}>1. Have installed the Gojek app, have a Gojek account, and activated  Gopay.</Text>
            <Text style={styles.textDetailTerms}>2. Your GoPay balance is sufficient to purchase products on Course Mastery.</Text>
            <Text style={styles.textDetailTerms}>3. Your payment will be redirected to the Gojek app, where you can complete the payment.</Text>
            <Text style={styles.textDetailTerms}>4. The package will be delivered to your number after successfully completing the payment in the Gojek app.</Text>
            {/* <Text style={styles.textDetailTerms}>By pressing the button, you agree to Course Mastery Terms and Conditions above.</Text> */}
          </View>
          <View style={styles.wrapContainer}>
            <Link href={'/payment/Payment2'} asChild>
            <TouchableOpacity style={styles.btnBack}>
              <Text style={styles.textBawah}>Back</Text>
            </TouchableOpacity>
            </Link>
            
            <Link href={'/payment/Payment4'} asChild>
            <TouchableOpacity style = {styles.btnNext}>
              <Text style={styles.textBawah}>Next</Text>
            </TouchableOpacity>
            </Link>
          </View>
      </View>
    </ImageBackground>
  );
};

export default Payment3;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center', 
    alignItems: 'center', 
    shadowColor:'#000',
    shadowOpacity:0.2,
    shadowOffset:{width: 2, height: 2},
    shadowRadius:3.5,
    elevation:5,

  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  box: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'flex-start',
    marginBottom: 20,
    elevation: 3,
  },
  boxJudul:{
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
  },
  textJudul: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign:'center',
  },
  textPay: {
    marginTop:20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign:'center',
  },
  textDetail: {
    fontSize: 14,
    color: '#000',
    fontWeight:'bold',
  },
  boxLogo:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginHorizontal:20,
  },
  garisVer:{
    borderRightWidth:2,
    borderColor:'#666',
    alignSelf:'center',
    marginHorizontal:10,
    height:50,
  },
  img_logo:{
    height:80,
    width:100,
    resizeMode:'contain',
  },  
  vaAcc:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginTop:10,
  },
  garisHori:{
    width: '100%',          
    borderBottomWidth: 2, 
    borderBottomColor: '#40A2A2', 
    marginVertical: 15,
  },
  textDetailTerms:{
    textAlign:'left',
    marginBottom:5,
  },
  wrapContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'80%',
    marginTop:20,
  },
  btnBack:{
    backgroundColor:'#E20000',
    paddingVertical:20,
    paddingHorizontal:40,
    borderRadius:30,
    shadowOpacity:0.2,
    shadowOffset:{width: 2, height: 2},
    shadowRadius:3.5,
    elevation:5,
  },
  btnNext:{
    backgroundColor:'#15D84B',
    paddingVertical:20,
    paddingHorizontal:40,
    borderRadius:30,
    shadowOpacity:0.2,
    shadowOffset:{width: 2, height: 2},
    shadowRadius:3.5,
    elevation:5,
  },
  textBawah:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
