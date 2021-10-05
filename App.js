import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {Flex, Box, Icon, NativeBaseProvider, Image} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AXIE_API_URL} from './constants';
import AxieList from './components/AxieList/AxieList';
import axios from 'axios';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Fuck = () => {
  return (
    <View>
      <Text>Fuck</Text>
    </View>
  );
};

const App = () => {
  const [axies, setAxies] = useState();
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await axios.get(`${AXIE_API_URL}/axielist`);
      setAxies(response.data.data.axies.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <View>
          <Text style={styles.title}>Axie Pad</Text>
        </View>
        <Tab.Navigator
          tabBarOptions={{
            keyboardHidesTabBar: true,
          }}>
          <Tab.Screen
            name="Home"
            options={{headerShown: false}}
            component={() => <AxieList axies={axies} />}></Tab.Screen>
          <Tab.Screen
            name="Not Home"
            component={Fuck}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#161B22',
    fontSize: 28,
    fontFamily: 'BowlbyOne-Regular',
    paddingTop: 16,
    textAlign: 'center',
    color: 'white',
  },
});

export default App;
