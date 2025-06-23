// App.tsx (수정)
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from './src/screens/OnboardingScreen';
import PermissionScreen from './src/screens/PermissionScreen';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import RecordVoiceScreen from './src/screens/RecordVoiceScreen'; // 음성 녹음 화면 추가

type RootStackParamList = {
  Onboarding: undefined;
  Permission: undefined;
  MainApp: undefined;
  RecordVoice: undefined; // 음성 녹음 화면 스택에 등록
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      {/* 이제 모든 화면 이동은 Stack Navigator가 관리합니다. */}
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
        {/* 음성 녹음 화면을 별도의 스크린으로 등록 */}
        <Stack.Screen
          name="RecordVoice"
          component={RecordVoiceScreen}
          options={{
            presentation: 'modal', // 화면이 아래에서 위로 올라오는 효과
            title: '기록하기',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;