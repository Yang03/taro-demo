import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

import B from './c/b';

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <B />
      <View dangerouslySetInnerHTML={{ __html: 'test'}}></View>
    </View>
  )
}
