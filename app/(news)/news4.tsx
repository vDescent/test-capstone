import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const News4 = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>

      <Image
        source={require('@/assets/images/img_backgroundHome.png')}
        style={styles.img_backgroundHome}
      />
      {/* News Item */}
      <Text style={styles.text_date}>20 April 2024</Text>
      <Image
        source={require('@/assets/images/img_inNews4.png')}
        style={styles.img_news}
      />
      <View style={styles.contentContainer}>
        <View style={styles.newsContainer}>
          <View style={styles.textContainer}>
          <View style={styles.JudtextContainer}>
            <Text style={styles.text_judnews}>List of 10 Jobs Sought in 2024</Text>
            </View>
            <Text style={styles.text_isinews}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum luctus dolor eget finibus. Integer porta elit dolor, dignissim interdum sapien molestie quis. In hac habitasse platea dictumst.
            </Text>
            <Text style={styles.text_isinews}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum luctus dolor eget finibus. Integer porta elit dolor, dignissim interdum sapien molestie quis. In hac habitasse platea dictumst.
            </Text>
            <Text style={styles.text_isinews}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum luctus dolor eget finibus. Integer porta elit dolor, dignissim interdum sapien molestie quis. In hac habitasse platea dictumst.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default News4;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e8c8f',
  },

  img_backgroundHome: {
    position: 'absolute',
    width: '100%',    
    height: '100%',
    resizeMode: 'cover',
    zIndex: -1,
  },

  contentContainer: {
    top: 15,
    padding: 8,
    width: '90%',
    borderRadius: 10,
    // backgroundColor: '#007f80',
    zIndex: 1,
  },

  dateContainer: {
    width: '90%',
    marginTop: 20,
    paddingHorizontal: 10,
  },

  text_date: {
    top:-5,
    left:'33%',
    fontSize: 18,
    fontWeight:'bold',
    color: 'white',
    textAlign: 'right',
  },

  JudtextContainer: {
    alignSelf: 'flex-start', 
    borderBottomColor: 'white',
    paddingBottom: 2, 
  },

  newsContainer: {
    marginTop: 10,
    // color:'white',
  },

  img_news: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },

  textContainer: {
    padding: 15,
    top:-25,
  },

  text_judnews: {
    fontSize: 22,
    fontWeight: 'bold',
    top:-18,
    left: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  
  text_isinews: {
    left:10,
    top:-15,
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 20,
    marginBottom: 10,
  },
});
