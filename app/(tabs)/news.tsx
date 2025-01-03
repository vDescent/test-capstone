import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ActionSheetIOS } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.text_namepage}>News</Text>
      <Image
        source={require('@/assets/images/img_backgroundHome.png')}
        style={styles.img_backgroundHome}
      />
      <View style={styles.contentContainer}>
        {/* News Item 1 */}
        <View style={styles.newsContainer}>
          <Image
            source={require('@/assets/images/img_news1.png')}
            style={styles.img_news}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text_judnews}>Lorem Ipsum</Text>
            <Text style={styles.text_isinews}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit leo nibh, et faucibus nibh auctor nec. Aliquam felis nunc, rutrum sed tellus nec, aliquam interdum sapien.
            </Text>
            <Link href={'/(news)/news1'} asChild>
            <TouchableOpacity>
              <Text style={styles.readMore}>Read More ></Text>
            </TouchableOpacity>
            </Link>
          </View>
        </View>

        {/* News Item 2 */}
        <View style={styles.newsContainer}>
          <Image
            source={require('@/assets/images/img_news2.png')}
            style={styles.img_news}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text_judnews}>Lorem Ipsum 2</Text>
            <Text style={styles.text_isinews}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit leo nibh, et faucibus nibh auctor nec. Aliquam felis nunc, rutrum sed tellus nec, aliquam interdum sapien.
            </Text>
            <Link href={'/(news)/news2'} asChild>
            <TouchableOpacity>
              <Text style={styles.readMore}>Read More ></Text>
            </TouchableOpacity>
            </Link>
          </View>
        </View>

        {/* News Item 3 */}
        <View style={styles.newsContainer}>
          <Image
            source={require('@/assets/images/img_news3.png')}
            style={styles.img_news}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text_judnews}>Lorem Ipsum 3</Text>
            <Text style={styles.text_isinews}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit leo nibh, et faucibus nibh auctor nec. Aliquam felis nunc, rutrum sed tellus nec, aliquam interdum sapien.
            </Text>
            <Link href={'/(news)/news3'} asChild>
            <TouchableOpacity>
              <Text style={styles.readMore}>Read More ></Text>
            </TouchableOpacity>
            </Link>
          </View>
        </View>

        {/* News Item 4 */}
        <View style={styles.newsContainer}>
          <Image
            source={require('@/assets/images/img_news4.png')}
            style={styles.img_news}
          />
          <View style={styles.textContainer}>
            <Text style={styles.text_judnews}>Lorem Ipsum 4</Text>
            <Text style={styles.text_isinews}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit leo nibh, et faucibus nibh auctor nec. Aliquam felis nunc, rutrum sed tellus nec, aliquam interdum sapien.
            </Text>
            <Link href={'/(news)/news4'} asChild>
            <TouchableOpacity>
              <Text style={styles.readMore}>Read More ></Text>
            </TouchableOpacity>
            </Link>
          </View>
        </View>

        {/* {Array.from({ length: 20 }, (_, i) => (
          <Text key={i} style={styles.contentText}>
            Content Line {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        ))} */}
      </View>
    </ScrollView>
  );
};

export default Home;

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
    top: 20,
    padding: 8,
    width: '90%',
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    zIndex: 1,
  },

  newsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  img_news: {
    width: 180,
    height: 260,
    borderRadius: 10,
    marginRight: 15,
  },

  textContainer: {
    flex: 1,
  },

  // TEXT SECTION
  text_namepage: {
    top: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },

  text_judnews: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },

  text_isinews: {
    fontSize: 15,
    color: '#FFFFFF',
    lineHeight: 20,
    marginBottom: 15,
  },

  // END TEXT SECTION

  contentText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },

  readMore: {
    top: -13,
    fontSize: 14,
    color: 'blue',
    fontWeight: 'bold',
  },
});
