import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import PackageList from './packageList';
import NewsSwiper from './newsSwiper'

class HomeScreen extends Component {
  render() {
    return (
      <ScrollView>
        <Text>SALAM</Text>
        {/* <NewsSwiper/> */}
        <PackageList
          packageListName = "پکیج های من"
        />
        <PackageList
          packageListName = "ویدیو های من"
        />
        <PackageList
          packageListName = "جزوه ها"
        />
        <PackageList
          packageListName = "پکیج های من"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default HomeScreen;