import { forwardRef } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const Button = forwardRef(({ ...props }, ref) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.text}>Get Started</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    height: 92,
    backgroundColor: '#42c83c',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#f6f6f6',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
