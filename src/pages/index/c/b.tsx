import React from 'react';
import { View } from '@tarojs/components';


export default () => {
  return (<View>
     {[{ a: '<View>ffffff</View>'}].map((item) => <View dangerouslySetInnerHTML={{ __html: item.a }}></View>)}
  </View>)
}