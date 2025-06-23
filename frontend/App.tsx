// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from './src/screens/OnboardingScreen';
import PermissionScreen from './src/screens/PermissionScreen';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import RecordVoiceScreen from './src/screens/RecordVoiceScreen';
import DiaryDetailScreen from './src/screens/DiaryDetailScreen';

type RootStackParamList = {
  Onboarding: undefined;
  Permission: undefined;
  MainApp: undefined;
  RecordVoice: undefined;
  DiaryDetail: { diary: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Permission"
          component={PermissionScreen}
          options={{ title: '권한 설정' }}
        />
        <Stack.Screen
          name="MainApp"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecordVoice"
          component={RecordVoiceScreen}
          options={{
            presentation: 'modal',
            title: '기록하기',
          }}
        />
        <Stack.Screen
          name="DiaryDetail"
          component={DiaryDetailScreen}
          options={{ 
            title: '기록 보기',
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;