import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';


const ResultPayment = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({ headerShown: false });
    }, [navigation]);
  return (
    <ImageBackground source={require('@/assets/images/bg_payment.png')} style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.title}>Transaction Details</Text>

        {/* Payment Info */}
        <View style={styles.paymentInfo}>
          <View style={styles.row}>
            <Text style={styles.label}>Payment:</Text>
            <Text style={styles.status}>SUCCESS ✅</Text>
          </View>
          <Text style={styles.company}>Apple Inc.</Text>
          <Text style={styles.batch}>Batch 1 Data Science</Text>
        </View>

        <View style={styles.divider} />

        {/* Transaction Details */}
        <Text style={styles.sectionTitle}>Transaction Details</Text>
        <View style={styles.transactionDetails}>
          <View style={styles.transactionRow}>
            <Text style={styles.transactionLabel}>Jumlah:</Text>
            <Text style={styles.transactionAmount}>Rp150,000,00</Text>
          </View>
          <View style={styles.transactionRow}>
            <Text style={styles.transactionLabel}>Biaya Layanan:</Text>
            <Text style={styles.transactionAmount}>Rp1,000,00</Text>
          </View>
          <View style={styles.transactionRow}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalAmount}>Rp151,000,00</Text>
          </View>
        </View>
      </View>

      {/* Thank You Button with Link to Home */}
      <Link href="/(tabs)/Home" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Thank you</Text>
        </TouchableOpacity>
      </Link>
    </ImageBackground>
  );
};

export default ResultPayment;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paymentInfo: {
    width: '100%',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  status: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  company: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  batch: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 10,
  },
  divider: {
    height: 3,
    backgroundColor: '#0e8c8f',
    width: '100%',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  transactionDetails: {
    width: '100%',
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  transactionLabel: {
    fontSize: 16,
    color: '#333',
  },
  transactionAmount: {
    fontSize: 16,
    color: '#333',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: '#0e8c8f',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
