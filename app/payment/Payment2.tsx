import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import {Entypo} from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';

const Payment2 = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Background Image */}
      <Image source={require('@/assets/images/bg_payment.png')} style={styles.backgroundImage} />

      {/* Payment Information Card */}
      <View style={styles.infoCard}>
        <Text style={styles.companyName}>Apple Inc.</Text>
        <Text style={styles.batchName}>Batch 1 Data Science</Text>

        {/* Additional Details */}
        <Text style={styles.detailText}>
          <Text style={styles.label}>Category :</Text> IT
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.label}>Location :</Text> Online
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.label}>Date :</Text> 20 Apr - 30 Mei 2024
        </Text>

        {/* Price */}
        <Text style={styles.price}>IDR 150.000,00</Text>
      </View>

      {/* Payment Options */}
      <View style={styles.paymentOptions}>
        <Text style={styles.sectionTitle}>E-Wallet</Text>

        {/* E-Wallet Options */}
        <Link href={'/payment/Payment3'} asChild>
        <TouchableOpacity style={styles.paymentOption}>
          <Image source={require('@/assets/images/img_gopay.png')} style={styles.paymentIcon} />
          <Text style={styles.paymentText}>Gopay</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
        </Link>
        <TouchableOpacity style={styles.paymentOption}>
          <Image source={require('@/assets/images/img_dana.png')} style={styles.paymentIcon} />
          <Text style={styles.paymentText}>Dana</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentOption}>
          <Image source={require('@/assets/images/img_ovo.png')} style={styles.paymentIcon} />
          <Text style={styles.paymentText}>OVO</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentOption}>
          <Image source={require('@/assets/images/img_shoppepay.png')} style={styles.paymentIcon} />
          <Text style={styles.paymentText}>Shopee Pay</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>

        {/* Virtual Accounts Section */}
        <Text style={styles.sectionTitle}>Virtual Accounts</Text>
        <Link href={'/payment/Payment7'} asChild>
        <TouchableOpacity style={styles.paymentOption}>
          <Image source={require('@/assets/images/img_bca.png')} style={styles.paymentIcon} />
          <Text style={styles.paymentText}>BCA VA</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
        </Link>
        <TouchableOpacity style={styles.paymentOption}>
          <Image source={require('@/assets/images/img_mandiri.png')} style={styles.paymentIcon} />
          <Text style={styles.paymentText}>Mandiri VA</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentOption}>
          <Image source={require('@/assets/images/img_bri.png')} style={styles.paymentIcon} />
          <Text style={styles.paymentText}>BRI VA</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentOption}>
          <Image source={require('@/assets/images/img_bni.png')} style={styles.paymentIcon} />
          <Text style={styles.paymentText}>BNI VA</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Payment2;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 60,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: 1350,
    resizeMode: 'cover',
    zIndex: -1,
  },
  infoCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    width: '90%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  batchName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  label: {
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: '#28a745',
    fontWeight: '500',
    marginTop: 10,
  },
  paymentOptions: {
    width: '90%',
  },
  sectionTitle: {
    fontSize: 14,
    color: '#333',
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  paymentIcon: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  paymentText: {
    fontWeight: 'bold',
    flex: 1,
    fontSize: 17,
    color: '#333',
  },
  arrow: {
    fontSize: 16,
    color: '#333',
  },
});
