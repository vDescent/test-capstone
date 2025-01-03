import React, { useLayoutEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

const Notification = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* JIKA PERLU MENGGUNAKAN BACK */}
        {/* <Entypo name="chevron-left" size={24} color="white" onPress={() => navigation.goBack()} />  */}
        <Text style={styles.headerTitle}>Notification</Text>
      </View>

      {/* Notification List */}
      <ScrollView contentContainerStyle={styles.notificationList}>
        {/* Individual Notification Items */}
        <View style={styles.notificationCard}>
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.notificationIcon} />
          <View style={styles.notificationContent}>
            <Text style={styles.notificationTitle}>Lorem Ipsum</Text>
            <Text style={styles.notificationDate}>20 Apr - 30 Mei 2024</Text>
            <Text style={styles.notificationDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
        </View>

        <View style={styles.notificationCard}>
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.notificationIcon} />
          <View style={styles.notificationContent}>
            <Text style={styles.notificationTitle}>Lorem Ipsum</Text>
            <Text style={styles.notificationDate}>20 Apr - 30 Mei 2024</Text>
            <Text style={styles.notificationDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
        </View>

        <View style={styles.notificationCard}>
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.notificationIcon} />
          <View style={styles.notificationContent}>
            <Text style={styles.notificationTitle}>Lorem Ipsum</Text>
            <Text style={styles.notificationDate}>20 Apr - 30 Mei 2024</Text>
            <Text style={styles.notificationDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
        </View>

        <View style={styles.notificationCard}>
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.notificationIcon} />
          <View style={styles.notificationContent}>
            <Text style={styles.notificationTitle}>Lorem Ipsum</Text>
            <Text style={styles.notificationDate}>20 Apr - 30 Mei 2024</Text>
            <Text style={styles.notificationDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
        </View>

        <View style={styles.notificationCard}>
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.notificationIcon} />
          <View style={styles.notificationContent}>
            <Text style={styles.notificationTitle}>Lorem Ipsum</Text>
            <Text style={styles.notificationDate}>20 Apr - 30 Mei 2024</Text>
            <Text style={styles.notificationDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
        </View>

        <View style={styles.notificationCard}>
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.notificationIcon} />
          <View style={styles.notificationContent}>
            <Text style={styles.notificationTitle}>Lorem Ipsum</Text>
            <Text style={styles.notificationDate}>20 Apr - 30 Mei 2024</Text>
            <Text style={styles.notificationDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
        </View>  
      </ScrollView>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e8c8f',
  },
  header: {
    top: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    flex: 1,
    // left: -10,
    top: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  notificationList: {
    top: 35,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  notificationIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: '#D9D9D9',
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationDate: {
    fontSize: 12,
    color: '#AAA',
    marginBottom: 4,
  },
  notificationDescription: {
    fontSize: 14,
    color: '#555',
  },
});
