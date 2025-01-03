import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Animated, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { Entypo, Ionicons } from '@expo/vector-icons';


const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(1)); // Opacity awal 1

  const images = [
    require('@/assets/images/img_news1.png'),
    require('@/assets/images/img_news2.png'),
    require('@/assets/images/img_news3.png'),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500, // Durasi fade out
        useNativeDriver: true,
      }).start(() => {
        // Update gambar setelah fade out
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        
        // Fade in
        fadeAnim.setValue(1); // Set opacity kembali ke 1
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500, // Durasi fade in
          useNativeDriver: true,
        }).start();
      });
    }, 4000); // Ganti gambar setiap 3 detik (1 detik untuk fade out dan 1 detik untuk fade in)

    return () => clearInterval(interval);
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      {/* Icon Notifikasi */}
      {/* <Link href="/notification" asChild>
        <TouchableOpacity style={styles.notificationIcon}>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
      </Link> */}
      
      <View style={styles.notificationIconContainer}>
        <Link href="/notification" asChild>
          <TouchableOpacity style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </Link>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground
          source={require('@/assets/images/img_backgroundHome.png')}
          style={styles.img_backgroundHome}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.text_hiUser}>Hi, Sindhu !</Text>
          <Text style={styles.text_findLes}>Find your lessons today!</Text>
          <Text style={styles.text_grow}>Growing With Us</Text>
          <Text style={styles.text_deter}>Determine Your Future For Better Life</Text>

          <Link href="/(tabs)/course" asChild>
            <TouchableOpacity style={styles.btn_search}>
              <Entypo name="magnifying-glass" size={20} color="white" style={styles.icon_loop} />
              <Text style={styles.text_search}>Search now...</Text>
            </TouchableOpacity>
          </Link>
          
          <Text style={styles.text_popular}>Popular Training Themes</Text>
          <ScrollView contentContainerStyle= {{flexGrow:1}}horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll1}>
            <Image source={require('@/assets/images/img_scroll1A.png')} style={styles.img_scrollItem} />
            <Image source={require('@/assets/images/img_scroll1B.png')} style={styles.img_scrollItem} />
            <Image source={require('@/assets/images/img_scroll1C.png')} style={styles.img_scrollItem} />
            <Image source={require('@/assets/images/img_scroll1D.png')} style={styles.img_scrollItem} />
            <Image source={require('@/assets/images/img_scroll1E.png')} style={styles.img_scrollItem} />
          </ScrollView>

          <ScrollView contentContainerStyle= {{flexGrow:1}}horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll1}>
            <Image source={require('@/assets/images/img_scroll1A.png')} style={styles.img_scrollItem} />
            <Image source={require('@/assets/images/img_scroll1B.png')} style={styles.img_scrollItem} />
            <Image source={require('@/assets/images/img_scroll1C.png')} style={styles.img_scrollItem} />
          </ScrollView>

          {/* SCROLL VIEW 2 */}
          <Text style={styles.text_news}>News</Text>

          {/* Gambar berganti otomatis dengan efek fade */}
          <Animated.View style={{ opacity: fadeAnim }}>
            <Image source={images[currentImageIndex]} style={styles.newsImage} />
          </Animated.View>

          <Text style={styles.text_judulNews}>Lorem Ipsum</Text>
          <Text style={styles.text_descNews}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit leo nibh, et faucibus nibh auctor nec. Aliquam felis nunc, rutrum sed tellus nec, aliquam interdum sapien. Morbi maximus dignissim ante ac rhoncus. Crast</Text>
          <Link href='/(tabs)/news' asChild>
          <TouchableOpacity>
          <Text style={styles.text_readMore}>Read More ></Text>
          </TouchableOpacity>
          </Link>

          {/* WHY US */}
          <Text style={styles.text_why}>Why Us?</Text>
          <Text style= {styles.text_wePride}>We pride ourselves on offering comprehensive and tailored training solutions designed to equip you with the skills and knowledge needed to excel in today's competitive job market. </Text>
          <Image source={require('@/assets/images/img_why.png')} style={styles.img_why}/>
          
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notificationIcon: {
    padding: 10,
    backgroundColor: '#fff', // Background color for the icon box
    borderRadius: 10,
  },

  notificationIconContainer: {
    position: 'absolute',
    top: 50,
    right: 30,
    zIndex: 2,
  },

  img_backgroundHome: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: -1,
  },
  contentContainer: {
    padding: 20,
    zIndex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  // TEXT SECTION
  text_hiUser: {
    top: 20,
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  text_findLes: {
    color: 'white',
    fontSize: 16,
    top: 18,
  },
  text_grow: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
    top: 30,
    textAlign: 'center',
  },
  text_deter: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    top: 28,
    fontWeight: 'bold',
  },
  text_popular: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 100,
  },
  // BUTTON SECTION
  btn_search: {
    position: 'absolute',
    top: 170,
    left: 30,
    backgroundColor: '#2D9596',
    borderRadius: 10,
    paddingVertical: 12,
    width: '90%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    opacity: 0.8,
    borderWidth: 1,
    borderColor: 'white',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 10,
  },
  text_search: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 8,
    left: 20,
  },
  icon_loop: {
    left: 20,
  },
  // END BUTTON SECTION 

  // START SCROLL SECTION
  horizontalScroll1: {
    borderRadius:10,
    top: 95,
    paddingRight: 10,
    marginTop:20,
  },
  img_scrollItem: {
    borderRadius: 10,
    marginRight: 10,
  },
  // END SCROLL SECTION

  // NEWS SECTION
  text_news: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    top: 115,
  },
  newsImage: {
    top:105,
    marginTop: 20,
    borderRadius: 10,
  },

  text_judulNews:{
    left:215,
    fontSize:20,
    fontWeight:'bold',
    bottom:180,
    color:'white',
  },

  text_descNews:{
    paddingRight:10,
    textAlign:'justify',
    marginHorizontal:100,
    left:115,
    bottom:170,
    color:'white',
  },

  text_readMore:{
    color:'blue',
    bottom:187,
    left:215,
    fontWeight:'bold',
  },

  // END NEWS SECTION

  // WHY SECTION
  text_why:{
    color:'white',
    fontWeight:'bold',
    fontSize:24,
    bottom:140,
  },

  text_wePride:{
    color:'white',
    textAlign:'justify',
    marginHorizontal:100,
    left:-100,
    bottom:130,
    fontSize:16,
  },

  img_why:{
    bottom:320,
    left:200,
  },
  // END WHY SECTION 
  contentText: {
    top: 500,
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
});
