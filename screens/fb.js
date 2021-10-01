import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class FbScreen extends React.Component{
    render(){
        return(
            <View>
                <Text style={{
                    marginLeft:550,
                    marginTop:250,
                    fontSize:50,
                    color:'red',
                    fontFamily:'Aerial'
                }}>Facebook</Text>
            </View>
        )
    }
}