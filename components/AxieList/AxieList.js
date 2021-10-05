import React from 'react';
import {Spinner, ScrollView, Box} from 'native-base';
import Axie from '../Axie/Axie';

export default AxieList = ({axies}) => {
  if (!axies) {
    return <Spinner></Spinner>;
  }
  const axiesToRender = axies.map(axie => {
    return <Axie axie={axie}></Axie>;
  });

  return (
    <ScrollView>
      <Box
        flexDirection="row"
        display="flex"
        flex="1"
        flexWrap="wrap"
        justifyContent="center">
        {axiesToRender}
      </Box>
    </ScrollView>
  );
};
