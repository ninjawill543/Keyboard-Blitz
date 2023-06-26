import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  FlatList,
  SafeAreaView,
  Keyboard,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import colors from "./colors";
import BlueButton from "./components/BlueButton";
import WhiteButton from "./components/WhiteButton";
import "./locales/index";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./screens/RootStackParams";
import AppLoading from "expo-app-loading";
import ColoredPlaceholderTextInput from "./components/ColoredText";

import {
  useFonts,
  Roboto_400Regular as Regular,
  Roboto_500Medium as Medium,
  Roboto_700Bold as Bold,
} from "@expo-google-fonts/roboto";

export {
  ColoredPlaceholderTextInput,
  ImageBackground,
  Keyboard,
  SafeAreaView,
  FlatList,
  TextInput,
  Platform,
  useRef,
  KeyboardAvoidingView,
  Regular,
  Medium,
  Bold,
  useFonts,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  React,
  useState,
  useEffect,
  colors,
  BlueButton,
  WhiteButton,
  useTranslation,
  useNavigation,
  StackNavigationProp,
  RootStackParamList,
  AppLoading,
};
