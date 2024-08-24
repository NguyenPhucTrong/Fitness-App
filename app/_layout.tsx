import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';


export default function About() {
    return (
      <Stack
        screenOptions={{
        headerShown:false,
      }}
    />
  );
}