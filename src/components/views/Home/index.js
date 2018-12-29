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
});

export default HomeScreen;