import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Image,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import colors from "./colors";
  import BlueButton from "./components/BlueButton";
  import WhiteButton from "./components/WhiteButton";
  import "../locales/index";
  import { useTranslation } from "react-i18next";
  import {useNavigation} from '@react-navigation/native';
  import {StackNavigationProp} from '@react-navigation/stack';
  import {RootStackParamList} from './screens/RootStackParams';
  import AppLoading from 'expo-app-loading';
  
  
  import {
    useFonts,
    Roboto_400Regular as Regular,
    Roboto_500Medium as Medium,
    Roboto_700Bold as Bold,
  } from "@expo-google-fonts/roboto";

  export {StyleSheet,Text,View,Button, TouchableOpacity,Image, React, useState, useEffect, colors, BlueButton, WhiteButton, useTranslation, useNavigation, StackNavigationProp, RootStackParamList, AppLoading};
