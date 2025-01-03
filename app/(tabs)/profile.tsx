import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';  
import { FontAwesome, MaterialIcons, Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>SETTINGS</Text>
      <View style={styles.subHeaderContainer}>
        <Text style={styles.subHeaderText}>Backup & Restore</Text>
        <Image source={require('@/assets/images/img_iconGoogle.png')} style={styles.iconImage} />
      </View>

      <Text style={styles.subHeaderDescription}>Sign in and synchronize your data</Text>

      {/* Go Premium Button */}
      <TouchableOpacity style={styles.premiumButton}>
        <Text style={styles.premiumButtonText}>GO PREMIUM</Text>
      </TouchableOpacity>
    
      {/* Options List */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <FontAwesome name="cog" size={24} color="black" />
          <Text style={styles.optionText}>Settings</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <FontAwesome name="globe" size={24} color="black" />
          <Text style={styles.optionText}>Language Options</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="help-circle-outline" size={24} color="black" />
          <Text style={styles.optionText}>Customer Service</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <FontAwesome name="share-alt" size={24} color="black" />
          <Text style={styles.optionText}>Share with friends</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <AntDesign name="star" size={24} color="black" />
          <Text style={styles.optionText}>Rate Us</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <MaterialIcons name="feedback" size={24} color="black" />
          <Text style={styles.optionText}>Feedback</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
        
        <Link href={'/(auth)/login'} asChild>
        <TouchableOpacity style={styles.option}>
          <Entypo name="log-out" size={24} color="black" />
          <Text style={styles.optionText}>Log Out</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e8c8f',
    alignItems: 'center',
    paddingTop: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subHeaderContainer: {
    right: '13%',
    top:15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  subHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 5, 
  },
  iconImage: {
    width: 20,
    height: 20,
  },
  subHeaderDescription: {
    fontSize: 14,
    top: 10,
    right: '18%',
    color: 'white',
    marginBottom: 20,
  },
  premiumButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: '33%',
    borderRadius: 15,
    marginBottom: 20,
  },
  premiumButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  optionsContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginVertical: 5, 
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: 'black',
  },
});