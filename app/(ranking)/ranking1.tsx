import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Ranking1 = () => {
  const navigation = useNavigation();
  const [currentText, setCurrentText] = useState('Computer'); // State untuk teks

  const textOptions = ['Computer', 'Industry', 'Office Administration']; // Pilihan teks
  const [currentIndex, setCurrentIndex] = useState(0); // Index teks saat ini

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleLeftPress = () => {
    const newIndex = (currentIndex - 1 + textOptions.length) % textOptions.length;
    setCurrentIndex(newIndex);
    setCurrentText(textOptions[newIndex]);
  };

  const handleRightPress = () => {
    const newIndex = (currentIndex + 1) % textOptions.length;
    setCurrentIndex(newIndex);
    setCurrentText(textOptions[newIndex]);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/img_backgroundHome.png')}
        style={styles.img_backgroundHome}
      >
        <Text style={styles.textRank}>Ranking</Text>

        {/* Kotak Ranking */}
        <TouchableOpacity style={styles.rankingContainer}>
          <Text style={styles.rankNumber}>6</Text>
          <Image
            source={require('@/assets/images/img_profile1.png')}
            style={styles.rankImage}
          />
          <Text style={styles.rankName}>Wayne Raymond</Text>
          <Text style={styles.rankScore}>40</Text>
        </TouchableOpacity>

        {/* Kotak Chevron */}
        <View style={styles.chevronContainer}>
          <TouchableOpacity onPress={handleLeftPress}>
            <Ionicons name="chevron-back-outline" size={24} color="#000" style={styles.chevronIcon} />
          </TouchableOpacity>
          <Text style={styles.textChevron}>{currentText}</Text>
          <TouchableOpacity onPress={handleRightPress}>
            <Ionicons name="chevron-forward-outline" size={24} color="#000" style={styles.chevronIcon} />
          </TouchableOpacity>
        </View>

        {/* Kotak Nama User */}
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>John Doe</Text>
        </View>

        {/* Tulisan di bawah User Name */}
        <Text style={styles.subtitle}>{`1st ${currentText}`}</Text>

        {/* Kotak dengan Gambar */}
        <ImageBackground source={require('@/assets/images/img_backgroundRank1.png')} style={styles.imageBox}>
          <View style={styles.pointContainer}>
            <Text style={styles.pointText}>Point :</Text>
            <Text style={styles.pointValue}>46,5</Text>
          </View>
          <View style={styles.containerOrang}>
            <Image
              source={require('@/assets/images/img_orang.png')}
              style={styles.imagePerson}
            />
          </View>
        </ImageBackground>

        {/* Scrollable Ranking Boxes */}
        <ScrollView style={styles.scrollViewContainer}>
          {/* Kotak Ranking 2 */}
          <TouchableOpacity style={styles.rankingContainer}>
            <Text style={styles.rankNumber}>2</Text>
            <Image
              source={require('@/assets/images/img_profile2.png')}
              style={styles.rankImage}
            />
            <Text style={styles.rankName}>Alexander Nathaniel</Text>
            <Text style={styles.rankScore}>45,5</Text>
          </TouchableOpacity>
          {/* Kotak Ranking 3 */}
          <TouchableOpacity style={styles.rankingContainer}>
            <Text style={styles.rankNumber}>3</Text>
            <Image
              source={require('@/assets/images/img_profile2.png')}
              style={styles.rankImage}
            />
            <Text style={styles.rankName}>Isabella Grace</Text>
            <Text style={styles.rankScore}>44,0</Text>
          </TouchableOpacity>
          {/* Kotak Ranking 4 */}
          <TouchableOpacity style={styles.rankingContainer}>
            <Text style={styles.rankNumber}>4</Text>
            <Image
              source={require('@/assets/images/img_profile1.png')}
              style={styles.rankImage}
            />
            <Text style={styles.rankName}>Theodore Vincent</Text>
            <Text style={styles.rankScore}>43,5</Text>
          </TouchableOpacity>
          {/* Kotak Ranking 5 */}
          <TouchableOpacity style={styles.rankingContainer}>
            <Text style={styles.rankNumber}>5</Text>
            <Image
              source={require('@/assets/images/img_profile1.png')}
              style={styles.rankImage}
            />
            <Text style={styles.rankName}>Jonathan Alistair</Text>
            <Text style={styles.rankScore}>41,5</Text>
          </TouchableOpacity>
          {/* Kotak Ranking 6 */}
          <TouchableOpacity style={styles.rankingContainer}>
            <Text style={styles.rankNumber}>6</Text>
            <Image
              source={require('@/assets/images/img_profile1.png')}
              style={styles.rankImage}
            />
            <Text style={styles.rankName}>Wayne Raymond</Text>
            <Text style={styles.rankScore}>40</Text>
          </TouchableOpacity>
          {/* Kotak Ranking 7 */}
          <TouchableOpacity style={styles.rankingContainer}>
            <Text style={styles.rankNumber}>7</Text>
            <Image
              source={require('@/assets/images/img_profile1.png')}
              style={styles.rankImage}
            />
            <Text style={styles.rankName}>Harris Houston</Text>
            <Text style={styles.rankScore}>39</Text>
          </TouchableOpacity>
          {/* Kotak Ranking 8 */}
          <TouchableOpacity style={styles.rankingContainer}>
            <Text style={styles.rankNumber}>8</Text>
            <Image
              source={require('@/assets/images/img_profile1.png')}
              style={styles.rankImage}
            />
            <Text style={styles.rankName}>Rhodri Cook</Text>
            <Text style={styles.rankScore}>38</Text>
          </TouchableOpacity>
          {/* Kotak Ranking 9 */}
          <TouchableOpacity style={styles.rankingContainer}>
            <Text style={styles.rankNumber}>9</Text>
            <Image
              source={require('@/assets/images/img_profile2.png')}
              style={styles.rankImage}
            />
            <Text style={styles.rankName}>Lila Mullen</Text>
            <Text style={styles.rankScore}>37,5</Text>
          </TouchableOpacity>
          {/* Kotak Ranking 10 */}
          <TouchableOpacity style={styles.rankingContainer}>
            <Text style={styles.rankNumber}>10</Text>
            <Image
              source={require('@/assets/images/img_profile1.png')}
              style={styles.rankImage}
            />
            <Text style={styles.rankName}>Romeo Hunt</Text>
            <Text style={styles.rankScore}>36</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Ranking1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img_backgroundHome: {
    flex: 1,
  },
  textRank: {
    marginTop: '15%',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  rankingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#001C30',
    padding: 10,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  rankNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 10,
  },
  rankImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  rankName: {
    fontSize: 16,
    fontWeight: '300',
    color: '#fff',
    flex: 1,
  },
  rankScore: {
    marginRight: '5%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  chevronContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 0,
    marginTop: 20,
    elevation: 2,
  },
  textChevron: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  chevronIcon: {
    paddingHorizontal: 15,
  },
  userNameContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#001C30',
    padding: 5,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 35,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    marginTop: 10,
    marginLeft: 35,
  },
  imageBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#001C30',
    marginHorizontal: "10%",
    marginTop: 10,
    padding: 45,
  },
  pointContainer: {
    flex: 1,
  },
  pointText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  pointValue: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FFD700',
    marginTop: 5,
  },
  containerOrang: {
    position: 'absolute',
    bottom: -2, 
    right: 10, 
    alignItems: 'center',
  },
  imagePerson: {
    width: 130,
    height: 180,
    resizeMode: 'contain',
  },
  scrollViewContainer: {
    flex: 1,
    marginTop: 20, 
  },
});
