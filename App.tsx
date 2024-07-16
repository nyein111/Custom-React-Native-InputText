import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from './components/Input';
import {useState} from 'react';

const App = () => {
  const [text, setText] = useState<string>('');
  return (
    <View style={styles.container}>
      <Input
        editable={true}
        style={styles.inputText}
        selectTextOnFocus={false}
        onChangeText={(t: string) => setText(t)}
        value={text}
        placeholder="Please enter the text"
        // placeholderTextColor={'rgb(68 64 60)'}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    width: '80%',
    maxWidth: '80%',
    minWidth: '60%',
    height: 50,
  },
});
