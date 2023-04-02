import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import EmiCalculator from 'pages/EmiCalculator';

export default function App() {
  return (
    <View style={styles.container}>
      <EmiCalculator amountPlaceholder='Enter the loan amount' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    borderColor: 'grey',
    borderWidth: 5
  }
});
