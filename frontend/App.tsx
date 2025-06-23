// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import OnboardingScreen from './src/screens/OnboardingScreen';
import PermissionScreen from './src/screens/PermissionScreen';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import RecordVoiceScreen from './src/screens/RecordVoiceScreen';
import DiaryDetailScreen from './src/screens/DiaryDetailScreen';
import TextEntryScreen from './src/screens/TextEntryScreen'; // TextEntryScreen import 추가

// RootStackParamList에 TextEntry 추가
export type RootStackParamList = {
  Onboarding: undefined;
  Permission: undefined;
  MainApp: undefined;
  RecordVoice: undefined;
  DiaryDetail: { diary: any };
  TextEntry: undefined; // TextEntry 스크린 타입 추가
};

// 다른 파일에서 navigation prop 타입을 사용할 수 있도록 export
export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

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
            title: '음성으로 기록하기', // 제목 추가
            headerShown: true // 헤더 표시
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
        {/* TextEntry 스크린을 Stack에 등록 */}
        <Stack.Screen
          name="TextEntry"
          component={TextEntryScreen}
          options={{
            presentation: 'modal',
            title: '텍스트로 기록하기',
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;