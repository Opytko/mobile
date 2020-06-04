import React, {Component} from 'react';
import { Text, View} from 'react-native';
import {data} from './data'

export default class Apirest extends Component {
 
constructor (props) {
 super(props);
 this.state={
     data:data,
     comments: data[0].comments
 }
}


render() {
  return (
      <View style={{marginLeft: 56, marginTop: 15}}>
          <Text style={{fontSize: 25}}>Comments</Text>
        {
            this.state.comments.map(item => {
            return (
                <View style={{marginTop: 15}}>
                    <Text>Author - {item.author}</Text>
                    <Text style={{marginTop: 5}}>Comment - {item.comment}</Text>
                </View>
                )
            })
        }
        </View>
  );
  }
 }