import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import { Link, useRouter, useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';


const Payment1 = () => {
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
          {/* Gambar img_ilus */}
          <Image 
            source={require('@/assets/images/img_ilus.png')} 
            style={styles.imgIlus}
          />

          {/* Kotak yang berisi teks */}
          <View style={styles.box}>
            <Text style={styles.textJudul}>Apple Inc.</Text>
            <Text style={styles.textJudul}>Batch 1 Data Science</Text>

            {/* Teks tambahan */}
            <Text style={styles.textDetail}>Category  :  IT</Text>
            <Text style={styles.textDetail}>Location  :  Online</Text>
            <Text style={styles.textDetail}>Date         :  20 Apr - 30 Mei 2024</Text>
            <View style = {styles.checkboContainer}>
              <Ionicons name="checkbox" size={24} color="#15D84B" style={styles.checkBox} />
              <Text style = {styles.textSertif}>Certificate Available</Text>
            </View>
            <Text style= {styles.textPoint}>Point : 3</Text>
            <View style = {styles.garisHori}></View>
            <Text style = {styles.textDesk}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"</Text>
            <Text style={styles.textHarga}>IDR. 150.000,00</Text>
          </View>

          <View style={styles.wrapContainer}>
            <Link href={'/course'} asChild>
            <TouchableOpacity style={styles.btnBack}>
              <Text style={styles.textBawah}>Back</Text>
            </TouchableOpacity>
            </Link>
            
            <Link href={'/payment/Payment2'} asChild>
            <TouchableOpacity style = {styles.btnNext}>
              <Text style={styles.textBawah}>Next</Text>
            </TouchableOpacity>
            </Link>
          </View>
      </View>
    </ImageBackground>
  );
};

export default Payment1;

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
  imgIlus: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: -40,
    zIndex:999,
  },
  box: {
    backgroundColor: '#f0f0f0',
    height:'50%',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'flex-start',
    marginBottom: 20,
    elevation: 3,
  },
  textJudul: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  textDetail: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    fontWeight:'500',
  },
  checkboContainer:{
    flexDirection:'row'
  },
  checkBox:{
    marginTop:8,
  },
  textSertif:{
    marginLeft:8,
    marginTop:10,
    color:'#15D84B',
    fontWeight:'bold',
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
  textDesk:{
    marginTop:-5,
    textAlign:'justify',
  },
  textHarga:{
    fontWeight:'600',
    color:'#15D84B',
    fontSize:17,
    marginLeft:'50%',
    marginTop:20,
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
