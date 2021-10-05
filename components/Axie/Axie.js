import React, {useEffect, useState} from 'react';
import {Box, Text, Image} from 'native-base';
import icons from '../../assets/icons/icons';

export default Axie = ({axie}) => {
  const {
    id,
    name,
    parts,
    auction,
    image,
    class: axieClass,
    breedCount,
    title,
    battleInfo,
  } = axie;

  const getIcon = axieClass => {
    if (!axieClass) {
      return;
    }
    const icon = Object.entries(icons).find(
      icon => icon[0] === axieClass.toLowerCase(),
    );
    return icon[1];
  };

  return (
    <Box
      margin="1"
      padding="1"
      rounded="md"
      width="48"
      height="64"
      overflow="hidden"
      shadow={1}
      _light={{backgroundColor: 'gray.50'}}
      _dark={{backgroundColor: 'gray.700'}}>
      <Text>{name}</Text>
      <Text>{breedCount}</Text>
      <Text>{axieClass}</Text>
      <Image
        width={'5'}
        height={'5'}
        source={getIcon(axieClass)}
        alt="Axie type"></Image>
      <Image
        width={'2/3'}
        height={'2/3'}
        source={{uri: image}}
        position="absolute"
        top="30%"
        left="20%"
        alt="Axie body"
        marginLeft="auto"
        marginRight="auto"></Image>
    </Box>
  );
};
