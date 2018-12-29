import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import PackageItem from './packageItem';

class PackageList extends Component{

    render(){
    return(
        <View>
            <Text style = {styles.packageListNameStyle}>{this.props.packageListName}</Text>
            <ScrollView
            style = {styles.scrollViewStyle}
            horizontal = {true}
            ref="packageList"
            onContentSizeChange = {
                (width, height) => this.refs.packageList.scrollToEnd({
                    animated:true
                })
            }
            >
                <PackageItem
                packageName = "salam"
                icon = 'https://upload.wikimedia.org/wikipedia/commons/7/71/Endless_Taisan_911_2012_Super_GT_Sugo_free_practice.jpg'
                />
                <PackageItem
                    packageName = "salam"
                    icon = 'https://upload.wikimedia.org/wikipedia/commons/7/71/Endless_Taisan_911_2012_Super_GT_Sugo_free_practice.jpg' 

                />
                <PackageItem
                    packageName = "salam"
                    icon = 'https://upload.wikimedia.org/wikipedia/commons/7/71/Endless_Taisan_911_2012_Super_GT_Sugo_free_practice.jpg' 

                />
                <PackageItem
                    packageName = "salam"
                    icon = 'https://upload.wikimedia.org/wikipedia/commons/7/71/Endless_Taisan_911_2012_Super_GT_Sugo_free_practice.jpg' 

                />
                <PackageItem
                    packageName = "salam"
                    icon = 'https://upload.wikimedia.org/wikipedia/commons/7/71/Endless_Taisan_911_2012_Super_GT_Sugo_free_practice.jpg' 

                />
                <PackageItem
                    packageName = "salam"
                    icon = 'https://upload.wikimedia.org/wikipedia/commons/7/71/Endless_Taisan_911_2012_Super_GT_Sugo_free_practice.jpg' 

                />
                <PackageItem
                    packageName = "salam"
                    icon = 'https://upload.wikimedia.org/wikipedia/commons/7/71/Endless_Taisan_911_2012_Super_GT_Sugo_free_practice.jpg' 

                />
                <PackageItem
                    packageName = "salam"
                    icon = 'https://upload.wikimedia.org/wikipedia/commons/7/71/Endless_Taisan_911_2012_Super_GT_Sugo_free_practice.jpg' 

                />
                <PackageItem
                    packageName = "salam"
                    icon = 'https://upload.wikimedia.org/wikipedia/commons/7/71/Endless_Taisan_911_2012_Super_GT_Sugo_free_practice.jpg' 

                />
            </ScrollView>
        </View>
    );}
}

const styles = StyleSheet.create({

    scrollViewStyle:{
        padding : 5,
    },
    packageListNameStyle:{
        marginHorizontal:10,
    }
});

export default PackageList;