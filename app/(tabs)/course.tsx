import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Link } from 'expo-router';
import React, { useState, startTransition } from 'react';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Entypo } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Course = () => {
  const textGanti = ["Information System", "Industry","Office Administration"]

  const[currentIndex, setCurrentIndex] = useState(0);

  const tekanLeft = () =>{
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? textGanti.length -1 :prevIndex -1
    );
  }

  const tekanRight = () =>{
    setCurrentIndex((prevIndex) =>
    prevIndex === textGanti.length - 1 ? 0 : prevIndex + 1
    );
  }
  return (
    <ImageBackground
      source={require('@/assets/images/img_backgroundHome.png')}
      style={styles.img_backgroundHome}
    >
      <ScrollView style={styles.container}>
        {/* Header Container */}
        <View style={styles.headerContainer}>
          {/* Course Title */}
          <Text style={styles.title}>Course</Text>

          {/* Icon Container */}
          <View style={styles.iconContainer}>
            <View style={styles.notificationIconContainer}>
              <Link href="/notification" asChild>
                <TouchableOpacity style={styles.iconButton}>
                  <Ionicons name="notifications-outline" size={24} color="black" />
                </TouchableOpacity>
              </Link>
            </View>

            <View style={styles.rankIconContainer}>
              <Link href="/(ranking)/ranking1" asChild>
                <TouchableOpacity style={styles.iconButton}>
                  <FontAwesome6 name="ranking-star" size={24} color="black" />
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>

        <View style={styles.btn_type}>
          <TouchableOpacity onPress={tekanLeft} style = {styles.btnContainer}>
          <Ionicons name="chevron-back" size={24} color="white" style={styles.iconLeft} />
          </TouchableOpacity>
          <Text style={styles.text_type}>{textGanti[currentIndex]}</Text>
          <TouchableOpacity onPress={tekanRight} style = {styles.btnContainer}>
          <Entypo name="chevron-right" size={24} color="white" style={styles.iconRight} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btn_search}>
          <Entypo name="magnifying-glass" size={20} color="white" style={styles.icon_loop} />
          <Text style={styles.text_search}>Search Your Job...</Text>
        </TouchableOpacity>

        {/* Content 1 */}
        <View style={styles.jobContainerWrapper}>
          <View style={styles.jobContainer}>
              <View style={styles.iconBox}>
                <Octicons name="person" size={16} color="white" />
              </View>
              <Feather name="bookmark" size={22} color="black" style={styles.iconBookmark} />
            <AntDesign name="apple1" size={50} color="black" style={styles.iconApple} />
            <Text style={styles.textBatch}>Batch 1</Text>
            <Text style={styles.textJob}>Data Science</Text>
            <MaterialCommunityIcons name="message-alert" size={24} color="#2D9596" style={styles.iconAlert}/>
            <Text style={styles.textJenis}>IT/Data Science</Text>
            <Ionicons name="location-outline" size={24} color="#2D9596" style={styles.iconLokasi}/>
            <Text style={styles.textOnline}>Online</Text>
            <FontAwesome name="calendar-check-o" size={24} color="#2D9596" style={styles.iconDate}/>
            <Text style={styles.textDate}>20 Apr - 30 Mei 2024</Text>
            <Link href={'/payment/Payment1'} asChild>
            <TouchableOpacity style={styles.enrollContainer} activeOpacity={0.8}>
              <Text style = {styles.textEnroll}>Enroll Now</Text>
            </TouchableOpacity>
            </Link>
          </View>
          {/* Content 2 */}
          <View style={styles.jobContainer}>
              <View style={styles.iconBoxRed}>
                <Octicons name="person" size={16} color="white" />
              </View>
              <Feather name="bookmark" size={22} color="black" style={styles.iconBookmark} />
            <Image source={require('@/assets/images/img_windows.png')} style={styles.imgComp}/>
            <Text style={styles.textBatch}>Batch 2</Text>
            <Text style={styles.textJob}>Data Science</Text>
            <MaterialCommunityIcons name="message-alert" size={24} color="#2D9596" style={styles.iconAlert}/>
            <Text style={styles.textJenis}>MachineLearning</Text>
            <Ionicons name="location-outline" size={24} color="#2D9596" style={styles.iconLokasi}/>
            <Text style={styles.textOnline}>Online</Text>
            <FontAwesome name="calendar-check-o" size={24} color="#2D9596" style={styles.iconDate}/>
            <Text style={styles.textDate}>20 Apr - 30 Mei 2024</Text>
            <TouchableOpacity style={styles.soldContainer} activeOpacity={0.8}>
              <Text style = {styles.textEnroll}>Sold Out</Text>
            </TouchableOpacity>
          </View>
          {/* content 3 */}
          <View style={styles.jobContainer}>
              <View style={styles.iconBox}>
                <Octicons name="person" size={16} color="white" />
              </View>
              <Feather name="bookmark" size={22} color="black" style={styles.iconBookmark} />
            <Image source={require('@/assets/images/img_aws.png')} style={styles.imgComp}/>
            <Text style={styles.textBatch}>Batch 3</Text>
            <Text style={styles.textJob}>Data Science</Text>
            <MaterialCommunityIcons name="message-alert" size={24} color="#2D9596" style={styles.iconAlert}/>
            <Text style={styles.textJenis}>IT/Data Science</Text>
            <Ionicons name="location-outline" size={24} color="#2D9596" style={styles.iconLokasi}/>
            <Text style={styles.textOnline}>Online</Text>
            <FontAwesome name="calendar-check-o" size={24} color="#2D9596" style={styles.iconDate}/>
            <Text style={styles.textDate}>20 Apr - 30 Mei 2024</Text>
            <Link href={'/payment/payment1'} asChild>
            <TouchableOpacity style={styles.enrollContainer} activeOpacity={0.8}>
              <Text style = {styles.textEnroll}>Enroll Now</Text>
            </TouchableOpacity>
            </Link>
          </View>
          {/* content 4 */}
          <View style={styles.jobContainer}>
              <View style={styles.iconBox}>
                <Octicons name="person" size={16} color="white" />
              </View>
              <Feather name="bookmark" size={22} color="black" style={styles.iconBookmark} />
              <Image source={require('@/assets/images/img_windows.png')} style={styles.imgComp}/>
            <Text style={styles.textBatch}>Batch 4</Text>
            <Text style={styles.textJob}>Database</Text>
            <MaterialCommunityIcons name="message-alert" size={24} color="#2D9596" style={styles.iconAlert}/>
            <Text style={styles.textJenis}>IT/Database</Text>
            <Ionicons name="location-outline" size={24} color="#2D9596" style={styles.iconLokasi}/>
            <Text style={styles.textOnline}>Online</Text>
            <FontAwesome name="calendar-check-o" size={24} color="#2D9596" style={styles.iconDate}/>
            <Text style={styles.textDate}>20 Apr - 30 Mei 2024</Text>
            <Link href={'/payment/payment1'} asChild>
            <TouchableOpacity style={styles.enrollContainer} activeOpacity={0.8}>
              <Text style = {styles.textEnroll}>Enroll Now</Text>
            </TouchableOpacity>
            </Link>
          </View>
          {/* content 5 */}
          <View style={styles.jobContainer}>
              <View style={styles.iconBoxRed}>
                <Octicons name="person" size={16} color="white" />
              </View>
              <Feather name="bookmark" size={22} color="black" style={styles.iconBookmark} />
              <Image source={require('@/assets/images/img_bssn.png')} style={styles.imgComp}/>
            <Text style={styles.textBatch}>Batch 5</Text>
            <Text style={styles.textJob}>Cyber S.</Text>
            <MaterialCommunityIcons name="message-alert" size={24} color="#2D9596" style={styles.iconAlert}/>
            <Text style={styles.textJenis}>IT/Cyber</Text>
            <Ionicons name="location-outline" size={24} color="#2D9596" style={styles.iconLokasi}/>
            <Text style={styles.textOnline}>Online</Text>
            <FontAwesome name="calendar-check-o" size={24} color="#2D9596" style={styles.iconDate}/>
            <Text style={styles.textDate}>20 Apr - 30 Mei 2024</Text>
            <TouchableOpacity style={styles.soldContainer} activeOpacity={0.8}>
              <Text style = {styles.textEnroll}>Sold Out</Text>
            </TouchableOpacity>
          </View>
          {/* Content 6 */}
          <View style={styles.jobContainer}>
              <View style={styles.iconBox}>
                <Octicons name="person" size={16} color="white" />
              </View>
            <Feather name="bookmark" size={22} color="black" style={styles.iconBookmark} />
            <Image source={require('@/assets/images/img_windows.png')} style={styles.imgComp}/>
            <Text style={styles.textBatch}>Batch 6</Text>
            <Text style={styles.textJob}>AI</Text>
            <MaterialCommunityIcons name="message-alert" size={24} color="#2D9596" style={styles.iconAlert}/>
            <Text style={styles.textJenis}>IT/AI</Text>
            <Ionicons name="location-outline" size={24} color="#2D9596" style={styles.iconLokasi}/>
            <Text style={styles.textOnline}>Online</Text>
            <FontAwesome name="calendar-check-o" size={24} color="#2D9596" style={styles.iconDate}/>
            <Text style={styles.textDate}>20 Apr - 30 Mei 2024</Text>
            <Link href={'/payment/paymentA1'} asChild>
            <TouchableOpacity style={styles.enrollContainer} activeOpacity={0.8}>
              <Text style = {styles.textEnroll}>Enroll Now</Text>
            </TouchableOpacity>
            </Link>
          </View>
          {/* Content 7 */}
          <View style={styles.jobContainer}>
              <View style={styles.iconBoxRed}>
                <Octicons name="person" size={16} color="white" />
              </View>
              <Feather name="bookmark" size={22} color="black" style={styles.iconBookmark} />
            <AntDesign name="apple1" size={50} color="black" style={styles.iconApple} />
            <Text style={styles.textBatch}>Batch 7</Text>
            <Text style={styles.textJob}>Front Dev</Text>
            <MaterialCommunityIcons name="message-alert" size={24} color="#2D9596" style={styles.iconAlert}/>
            <Text style={styles.textJenis}>IT/Web Dev</Text>
            <Ionicons name="location-outline" size={24} color="#2D9596" style={styles.iconLokasi}/>
            <Text style={styles.textOnline}>Online</Text>
            <FontAwesome name="calendar-check-o" size={24} color="#2D9596" style={styles.iconDate}/>
            <Text style={styles.textDate}>20 Apr - 30 Mei 2024</Text>
            <TouchableOpacity style={styles.soldContainer} activeOpacity={0.8}>
              <Text style = {styles.textEnroll}>Sold Out</Text>
            </TouchableOpacity>
          </View>
          {/* Content 8 */}
          <View style={styles.jobContainer}>
              <View style={styles.iconBoxRed}>
                <Octicons name="person" size={16} color="white" />
              </View>
              <Feather name="bookmark" size={22} color="black" style={styles.iconBookmark} />
              <Image source={require('@/assets/images/img_aws.png')} style={styles.imgComp}/>
            <Text style={styles.textBatch}>Batch 8</Text>
            <Text style={styles.textJob}>Cloud S.</Text>
            <MaterialCommunityIcons name="message-alert" size={24} color="#2D9596" style={styles.iconAlert}/>
            <Text style={styles.textJenis}>IT/Cloud S.</Text>
            <Ionicons name="location-outline" size={24} color="#2D9596" style={styles.iconLokasi}/>
            <Text style={styles.textOnline}>Online</Text>
            <FontAwesome name="calendar-check-o" size={24} color="#2D9596" style={styles.iconDate}/>
            <Text style={styles.textDate}>20 Apr - 30 Mei 2024</Text>
            <TouchableOpacity style={styles.soldContainer} activeOpacity={0.8}>
              <Text style = {styles.textEnroll}>Sold Out</Text>
            </TouchableOpacity>
          </View>
          {/* Content 9 */}
          {/* <View style={styles.jobContainer}>
              <View style={styles.iconBoxRed}>
                <Octicons name="person" size={16} color="white" />
              </View>
            <Feather name="bookmark" size={22} color="black" style={styles.iconBookmark} />
            <AntDesign name="apple1" size={50} color="black" style={styles.iconApple} />
            <Text style={styles.textBatch}>Batch 9</Text>
            <Text style={styles.textJob}>Data Science</Text>
            <MaterialCommunityIcons name="message-alert" size={24} color="#2D9596" style={styles.iconAlert}/>
            <Text style={styles.textJenis}>IT/Data Science</Text>
            <Ionicons name="location-outline" size={24} color="#2D9596" style={styles.iconLokasi}/>
            <Text style={styles.textOnline}>Online</Text>
            <FontAwesome name="calendar-check-o" size={24} color="#2D9596" style={styles.iconDate}/>
            <Text style={styles.textDate}>20 Apr - 30 Mei 2024</Text>
            <TouchableOpacity style={styles.soldContainer} activeOpacity={0.8}>
              <Text style = {styles.textEnroll}>Sold Out</Text>
            </TouchableOpacity>
          </View> */}
          {/* Content 10 */}
          {/* <View style={styles.jobContainer}>
              <View style={styles.iconBox}>
                <Octicons name="person" size={16} color="white" />
              </View>
            <Feather name="bookmark" size={22} color="black" style={styles.iconBookmark} />
            <Image source={require('@/assets/images/img_aws.png')} style={styles.imgComp}/>
            <Text style={styles.textBatch}>Batch 10</Text>
            <Text style={styles.textJob}>Cloud Comp</Text>
            <MaterialCommunityIcons name="message-alert" size={24} color="#2D9596" style={styles.iconAlert}/>
            <Text style={styles.textJenis}>IT/Cloud Comp</Text>
            <Ionicons name="location-outline" size={24} color="#2D9596" style={styles.iconLokasi}/>
            <Text style={styles.textOnline}>Online</Text>
            <FontAwesome name="calendar-check-o" size={24} color="#2D9596" style={styles.iconDate}/>
            <Text style={styles.textDate}>20 Apr - 30 Mei 2024</Text>
            <Link href={'/payment/payment1'} asChild>
            <TouchableOpacity style={styles.enrollContainer} activeOpacity={0.8}>
              <Text style = {styles.textEnroll}>Enroll Now</Text>
            </TouchableOpacity>
            </Link>
          </View> */}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Course;

const styles = StyleSheet.create({
  img_backgroundHome: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 140,
    marginTop: 20,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  btnContainer:{
    marginBottom:10,
  },
  notificationIconContainer: {
    marginTop: 20,
    marginRight: 20,
  },
  rankIconContainer: {
    marginRight: 10,
    marginTop: 20,
  },
  iconButton: {
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // button type
  btn_type: {
    backgroundColor: '#2D9596',
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  text_type: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    flex: 1,
  },
  iconLeft: {
    position: 'absolute',
    left: 20,
  },
  iconRight: {
    position: 'absolute',
    right: 20,
  },
  // BUTTON SECTION
  btn_search: {
    backgroundColor: '#2D9596',
    borderRadius: 10,
    paddingVertical: 12,
    width: '90%',
    opacity: 0.8,
    borderWidth: 1,
    borderColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: '5%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 10,
  },
  text_search: {
    color: 'white',
    fontSize: 16,
    marginLeft: 30,
  },
  icon_loop: {
    left: 20,
  },
  // Job Container Wrapper 
  jobContainerWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 16,
  },

  // Job Container 
  jobContainer: {
    width: '48%', 
    height: 260,
    backgroundColor: '#ffffff',  
    borderRadius: 10,  
    borderWidth: 1,  
    borderColor: '#fff',  
    padding: 16,  
    marginBottom: 30,  
  
    // Shadow properties
    shadowColor: '#000', // Warna shadow (hitam)
    shadowOffset: { width: 0, height: 8 }, // Posisi shadow (lebih tebal)
    shadowOpacity: 0.7, // Opacity shadow (lebih gelap dan tebal)
    shadowRadius: 10, // Ukuran blur shadow (lebih besar agar terlihat tebal)
  
    // Elevation for Android
    elevation: 15, // Memberikan efek shadow yang lebih tebal di Android
  },
  
  iconBox: {
    left:70,
    width: 40, // You can adjust the size
    height: 20, // You can adjust the size
    borderRadius: 10, // For rounded corners
    borderWidth: 2, // Border width
    borderColor: '#15D84B', // Green border color
    backgroundColor:'#15D84B',
    justifyContent: 'center', // Centering the icon inside the box
    alignItems: 'center', // Centering the icon inside the box
  },
  iconBoxRed: {
    left:70,
    width: 40, // You can adjust the size
    height: 20, // You can adjust the size
    borderRadius: 10, // For rounded corners
    borderWidth: 2, // Border width
    borderColor: '#D81515', // Green border color
    backgroundColor:'#D81515',
    justifyContent: 'center', // Centering the icon inside the box
    alignItems: 'center', // Centering the icon inside the box
  },
  iconBookmark:{
    top:-20,
    left:115,
  },
  iconApple:{
    marginTop:-25,
    marginLeft:-10,
  },
  imgComp:{
    resizeMode:'contain',
    marginTop:-25,
    marginLeft:-10,
    width:50,
    height:50,
  },
  textBatch:{
    marginLeft:45,
    top:-45,
    fontWeight:'bold',
    fontSize:18,
  },
  textJob:{
    fontSize:15,
    marginLeft:45,
    top:-48,
    fontWeight:'500',
  },
  iconAlert:{
    marginTop:-30,
  },  
  textJenis:{
    color:'#2D9596',
    marginTop:-23,
    marginLeft:28,
    fontWeight:'500',
  },
  iconLokasi:{
    marginTop:3,
  },
  textOnline:{
    color:'#2D9596',
    marginTop:-20,
    marginLeft:28,
    fontWeight:'500',
  }, 
  iconDate:{
    marginTop:3,
  },
  textDate:{
    fontSize:12,
    fontWeight:'500',
    color:'#2D9596',
    marginTop:-24,
    marginLeft:28,
  },
  enrollContainer: {
    width: '80%', 
    backgroundColor: '#2D9596', 
    paddingVertical: 12,
    marginTop: 20, 
    borderRadius: 10, 
    alignSelf: 'center', 
    justifyContent: 'center',
    alignItems: 'center', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 10,
  },
  soldContainer:{
    width: '80%', 
    backgroundColor: '#D81515', 
    paddingVertical: 12,
    marginTop: 20, 
    borderRadius: 10, 
    alignSelf: 'center', 
    justifyContent: 'center',
    alignItems: 'center', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 10,
  },
  textEnroll: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

});
