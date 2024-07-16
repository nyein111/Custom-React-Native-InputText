import React from 'react';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';

// Define the props interface extending TextInputProps to include placeholderTextColor
interface InputProps extends TextInputProps {
  placeholderTextColor?: string; // Optional prop for placeholder text color
}

const Input: React.FC<InputProps> = props => {
  return (
    <TextInput
      placeholderTextColor={props.placeholderTextColor || 'rgb(168 162 158)'} // Apply the placeholder text color
      {...props}
      style={[styles.input, props.style]} // Merge the default and custom styles
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: 'rgb(28 25 23)',
    marginVertical: 2,
    paddingLeft: 10,
  },
});

export default Input;
