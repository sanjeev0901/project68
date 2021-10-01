import React from 'react';
import {Text,View} from 'react-native';

export default class InScreen extends React.Component{
    render(){
        return(
            <View>
                <Text style={{
                    marginLeft:550,
                    marginTop:250,
                    fontSize:50,
                    color:'orange',
                    fontFamily:'Aerial'
                }}>Instagram</Text>
            </View>
        )
    }
}

