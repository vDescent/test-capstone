import { View, Text, Image,StyleSheet,Dimensions, TouchableOpacity} from 'react-native'
import {Link} from 'expo-router'
import React from 'react'
import {primary} from '../constants/Colors'

const index = () => {
  return (
    <View style={styles.container_utama}>

      <View style={styles.container_atas}>
      {/* <Image source={require('@/assets/images/img_HomePageBackground.png')} style={styles.img_HomePageBackground}/> */}
      <Image source={require('@/assets/images/img_welcomePage_Line3.png')} style={styles.img_welcomePage_Line3}/>
      <Image source={require('@/assets/images/img_welcomePage_Ellipse4.png')} style={styles.img_welcomePage_Ellipse4}/>
      </View>

      <View style={styles.container_tengah}>
      <Image source={require('@/assets/images/img_welcomePage_amico.png')} style={styles.img_welcomePage_amico}/>
      <Image source={require('@/assets/images/img_welcomePage_Ellipse2.png')} style={styles.img_welcomePage_Ellipse2}/>
      <Image source={require('@/assets/images/img_welcomePage_Line2.png')} style={styles.img_welcomePage_Line2}/>
      </View>

      <View style={styles.container_bawah}>
      <Image source={require('@/assets/images/img_welcomePage_Line1.png')} style={styles.img_welcomePage_Line1}/>
      <Image source={require('@/assets/images/img_welcomePage_Ellipse3.png')} style={styles.img_welcomePage_Ellipse3}/>
      <Image source={require('@/assets/images/img_welcomePage_Ellipse1.png')} style={styles.img_welcomePage_Ellipse1}/>
      </View>

      <View style={styles.container_start}>
      <Link href="/(auth)/login" asChild>
          <TouchableOpacity style={styles.btn_login}>
            <Text style={styles.text_welcomePage_GetStarted}>Get Started</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  img_HomePageBackground:{
    
  },

  container_utama:{
    flex:1,
    backgroundColor:'#206666',
    // alignItems:'center',
    // justifyContent:'center',
  },

  hehe:{
    justifyContent:'center',
  },
  
  
  container_atas:{
    flexDirection:'row',
    justifyContent:'flex-start',
    // width:windowWidth * 0.8,
    // marginBottom:30,
  },

  img_welcomePage_Line3:{
    // width:windowWidth*0.4,
    // height:windowHeight*0.23,
    resizeMode:'contain',
  },

  img_welcomePage_Ellipse4:{
    // width:windowWidth*0.27,
    // height:windowHeight*0.1,
    right:windowWidth*0.15,
    resizeMode:'contain',
  },

  container_tengah:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },

  img_welcomePage_amico:{
    width:windowWidth *0.7,
    height:windowHeight *0.4,
    zIndex:2,
    resizeMode:'contain',
  },

  img_welcomePage_Ellipse2:{
    position:'absolute',
    width:windowWidth*0.8,
    height:windowHeight*0.5,
    resizeMode:'contain',
    zIndex:1,
    left:windowWidth*-0.01,
  },

  img_welcomePage_Line2:{
    position:'absolute',
    left:windowWidth*0.2,
    zIndex:0,
    top:windowHeight*-0.12,
    resizeMode:'contain',
    
  },

  container_bawah:{
    
  },

  img_welcomePage_Line1:{
    
  },

  img_welcomePage_Ellipse3:{
    bottom:windowWidth*0.6,
    resizeMode:'contain',
  },

  img_welcomePage_Ellipse1:{
    bottom:windowHeight*0.6,
    left:windowWidth*0.8,
    resizeMode:'contain',
  },

  container_start: {
    position: 'absolute',
    bottom: 30, // Posisi 30px dari bawah
    width: '100%',
    alignItems: 'center', // Agar button berada di tengah
  },

  btn_login: {
    backgroundColor: primary, 
    width: '85%', 
    paddingVertical: 15, 
    borderRadius: 40, 
    alignItems: 'center', 
  },

  text_welcomePage_GetStarted: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  img_welcomePage_Start:{
    bottom:windowHeight*0.6,
    left:windowWidth*0.0,
    resizeMode:'contain',
  },
})

export default index