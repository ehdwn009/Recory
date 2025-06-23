// App.tsx (수정)

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 화면들을 불러옵니다.
import OnboardingScreen from './src/screens/OnboardingScreen';
import PermissionScreen from './src/screens/PermissionScreen';
import MainTabNavigator from './src/navigation/MainTabNavigator'; // 메인 탭 네비게이터 추가

type RootStackParamList = {
  Onboarding: undefined;
  Permission: undefined;
  MainApp: undefined; // 메인 탭 화면 추가
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
        {/* 메인 탭 네비게이터를 화면으로 등록 */}
        <Stack.Screen
          name="MainApp"
          component={MainTabNavigator}
          options={{ headerShown: false }} // 탭 내부에 자체 헤더가 있으므로 숨김
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;