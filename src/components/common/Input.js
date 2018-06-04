import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) =>

   (
      <View style={styles.constainerStyle}>
         <Text style={styles.labelStyle}>{label}</Text>
         <TextInput
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
            style={styles.inputStyle}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
         />
      </View>
   );

const styles = StyleSheet.create({
   inputStyle: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 18,
      lineHeight: 23,
      flex: 2,
      height: 20,
      width: 100
   },
   labelStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1,
   },
   constainerStyle: {
      flex: 1,
      height: 40,
      flexDirection: 'row',
      alignItems: 'center'
   }
});

export { Input };
