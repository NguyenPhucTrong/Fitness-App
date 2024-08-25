import { View, Text, StyleSheet, LogBox } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';


export default function About() {
  LogBox.ignoreAllLogs(["Warning:Failed to initialize"])
    return (
      <Stack
        screenOptions={{
        headerShown:false,
      }}
      >
        <Stack.Screen
          name='exercises'
          options={{
          presentation:"fullScreenModal"
        }}
        />
         <Stack.Screen
          name='exerciseDetails'
          options={{
          presentation:"modal"
        }}
        />
      </Stack>
  );
}