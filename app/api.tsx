import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';


const YourComponent = () => {
  const [word, setWord] = useState('');

  const fetchRandomWord = async () => {
    try {
      const response = await axios.get(
        'https://api.api-ninjas.com/v1/randomword',
        {
          headers: {
            'X-Api-Key': "API_KEY",
          },
        }
      );
      setWord(response.data.word);
    } catch (error) {
      console.error('Error:');
    }
  };

  return (
    <View style={{marginTop: 100}}>
      <Button title="Generate Word" onPress={fetchRandomWord} />
      <Text>{word}</Text>
    </View>
  );
};

export default YourComponent;
