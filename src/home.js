import React, {Component} from 'react';
import {StyleSheet,Text,SafeAreaView,View,ScrollView,TextInput,TouchableOpacity,StatusBar } from 'react-native';


const Home = ({navigation}) => {  
   const [text, handleText] = React.useState({ 
    keberangkatan: '',
    kedatangan: '',
    tanggal: '',
  });

  const getText = (nameVar) => {
    return (val) => {
      handleText({ ...text, [nameVar]: val });
      console.log(text);
    }
  }  
  
  return (
    <>
      <StatusBar barStyle="hidden"/>
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.header}>Hilling.id</Text>
          <View style={styles.main}>
            <View style={styles.group}>
              <Text style={styles.title}>Lokasi Keberangkatan</Text>
              <View style={styles.search}>
                <TextInput
                  style={styles.input} onChangeText={getText('keberangkatan')}
                  value={text.keberangkatan} placeholder="Lokasi Keberangkatan"/>
              </View>              
            </View>
            <View style={styles.group}>
              <Text style={styles.title}>Lokasi Tujuan</Text>
              <View style={styles.search}>
                <TextInput
                  style={styles.input} onChangeText={getText('kedatangan')}
                  value={text.kedatangan} placeholder="Lokasi Tujuan"/>
              </View>              
            </View>
            <View style={styles.group}>
              <Text style={styles.title}>Tanggal Keberangkatan</Text>
              <View style={styles.search}>
                <TextInput
                  style={styles.input} onChangeText={getText('tanggal')}
                  value={text.tanggal} placeholder="Tanggal Keberangkatan"/>
              </View>              
            </View>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#4C9900',
  },
  header: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 5,
    textAlign: 'center',
    marginTop: 40,    
  },

  main: {
    margin: 40,  
    marginTop: 40,  
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 15,
    marginVertical: 100,
  },
  group: {
    marginBottom: 30,
  },
  search: {
    marginLeft:15,    
    flexDirection: 'row', 
    justifyContent: 'center',   
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#283593',
    borderRadius: 5,
    color: '#283593',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 40,
    width: 250,
    flex: 1,
  },
  button: {
    backgroundColor: '#CC6600',
    borderRadius: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  copyright: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default Home;
