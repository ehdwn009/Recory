// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 우리가 만든 화면들을 불러옵니다.
import OnboardingScreen from './src/screens/OnboardingScreen';
import PermissionScreen from './src/screens/PermissionScreen';

// 화면들의 목록과 타입을 정의합니다.
type RootStackParamList = {
  Onboarding: undefined; // Onboarding 화면은 파라미터가 필요 없음
  Permission: undefined; // Permission 화면도 파라미터가 필요 없음
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        {/* 화면 목록을 등록합니다. */}
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }} // 화면 상단의 헤더(제목)를 숨깁니다.
        />
        <Stack.Screen
          name="Permission"
          component={PermissionScreen}
          options={{ title: '권한 설정' }} // 헤더 제목을 설정합니다.
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;