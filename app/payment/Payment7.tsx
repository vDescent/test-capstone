import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import { Link, useRouter, useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';


const Payment7 = () => {
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
            <Image source={require('@/assets/images/img_logoBca.png')} style = {styles.img_logo}/>
            <Text style={styles.textDetail}>Va Account : </Text>
            <View style = {styles.vaAcc}>
              <Text style = {styles.textXx}>xxxx xxxx xxxx xxxx</Text>
              <TouchableOpacity style = {styles.boxCopy}>
                <Text style = {styles.textCopy}>Copy Code</Text>
              </TouchableOpacity>
            </View>
            <View style = {styles.garisHori}></View>
              {/* Jumlah */}
              <View style={styles.boxPay}>
                <Text style={styles.textLeft}>Jumlah :                                 </Text>
                <Text style={styles.textRight}>Rp 150.000</Text>
              </View>

              {/* Biaya Layanan */}
              <View style={styles.boxPay}>
                <Text style={styles.textLeft}>Biaya Layanan :                         </Text>
                <Text style={styles.textRight}>Rp 1.000</Text>
              </View>

              {/* Total */}
              <View style={styles.boxPay}>
                <Text style={styles.textLeft}>Total :                                     </Text>
                <Text style={styles.textRight}>Rp 151.000</Text>
              </View>
            <View style = {styles.garisHori}></View>
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

export default Payment7;

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
  img_logo:{
    height:50,
    width:70,
    resizeMode:'contain',
  },  
  vaAcc:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginTop:10,
  },
  textXx:{
    marginLeft:8,
    marginTop:10,
    color:'#000',
    fontWeight:'bold',
    textAlign:'center',
    fontSize:20,
  },  
  boxCopy:{
    backgroundColor: '#00D6BE', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10, 
    alignItems: 'center',
  },
  textCopy:{
    color: '#fff', 
    fontWeight: 'bold',
    fontSize: 16,
  },
  textPoint:{
    color:'#15D84B',
    fontWeight:'bold',
  },
  garisHori:{
    width: '100%',          
    borderBottomWidth: 2, 
    borderBottomColor: '#40A2A2', 
    marginVertical: 15,
  },
  boxPay: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Membuat teks kiri dan kanan sejajar di ujung
    alignItems: 'center', // Menjaga keselarasan secara vertikal
    marginBottom: 5, // Jarak antar baris
  },
  textLeft: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
  },
  textRight: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#15D84B', 
    alignSelf:'flex-end',
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
