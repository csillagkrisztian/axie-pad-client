import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AXIE_API_URL} from './constants';
import axios from 'axios';

const App = () => {
  const [axies, setAxies] = useState();
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await axios.get(`${AXIE_API_URL}/axielist`);
      console.log(response.data.data.axies);
      setAxies(response.data.data.axies);
    } catch (error) {
      console.log(error);
    }
  };

  console.log('axies', axies);
  return axies ? (
    <View>
      <Text style={styles.title}>Axie Pad</Text>
      <AxieList axies={axies}></AxieList>
    </View>
  ) : (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

const AxieList = ({axies}) => {
  const axiesToRender = axies.results.map(axie => {
    return <Axie name={axie.name}></Axie>;
  });
  return axiesToRender;
};

const Axie = ({name}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'gray',
    fontSize: 28,
    fontFamily: 'BowlbyOne-Regular',
    paddingTop: 12,
    textAlign: 'center',
    color: 'white',
  },
});

export default App;
