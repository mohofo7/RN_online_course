import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

const PackageItem = (props)=>{

    getPackageName = ()=>{
        return props.packageName;
    }
    getPackageIcon = ()=>{
        return props.icon;
    }
    return(
        <TouchableOpacity
        onPress={
            ()=>{alert('hey')}
        }
        >
            <View style = {styles.packageItemStyle}>
                <Image
                source = {{uri: getPackageIcon()}}
                style = {styles.imageStyle}
                />
                <Text style = {styles.textStyle}>{getPackageName()}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    imageStyle:{
        width: 100,
        height: 100,
        borderRadius: 50
    },
    packageItemStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderWidth:1,
        borderColor: '#C5C3C6',
        width:105,
        marginHorizontal:5
    },
    textStyle:{

    }
});

export default PackageItem;