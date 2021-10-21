import React from 'react';
import {Button, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const IntroPage = () => {
  return (
    <View
      style={tw`container bg-white w-full h-full p-20 flex flex-col justify-between`}>
      <View style={tw`container flex-none`}>
        <Text style={tw``}>Corporate Action</Text>
        <Text>Remainder</Text>
      </View>
      <View style={tw`container flex-none`}>
        <View style={tw``}>
          <View>
            <Text>some text</Text>
          </View>
          <View>
            <Text>some text</Text>
          </View>
          <View>
            <Text>some text</Text>
          </View>
          <View>
            <Text>some text</Text>
          </View>
        </View>

      </View>
      <View style={tw`container`}>
        <Button title="Get Started" style={tw`rounded-lg`} />
      </View>
    </View>
  );
};

export default IntroPage;
