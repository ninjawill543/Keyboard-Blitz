import React, { useEffect, useRef, useState } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

const ColoredPlaceholderTextInput = () => {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  const renderColoredPlaceholder = () => {
    const placeholder = 'hypertension';
    const placeholderChars = placeholder.split('');

    return (
      <View style={styles.placeholderContainer}>
        {placeholderChars.map((char, index) => (
          <View key={index} style={styles.charContainer}>
            <Text
              style={[
                styles.char,
                char === text[index] && styles.typedChar,
              ]}
            >
              {char}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderColoredPlaceholder()}
      <TextInput
        ref={inputRef}
        style={styles.hiddenInput}
        onChangeText={handleTextChange}
        value={text}
        blurOnSubmit={false} 
                autoCapitalize="none" 
                returnKeyType="next" 
                autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 28
  },
  placeholderContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  charContainer: {
    paddingHorizontal: 3,
  },
  char: {
    fontSize: 32,
    color: '#000000',
    fontFamily: 'Bold'
  },
  typedChar: {
    color: '#ED9C1A',
    fontFamily: 'Bold'
  },
  hiddenInput: {
    position: 'absolute',
    top: -1000,
    left: -1000,
    height: 0,
    width: 0,
  },
});

export default ColoredPlaceholderTextInput;

