// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import OnboardingScreen from './src/screens/OnboardingScreen';
import PermissionScreen from './src/screens/PermissionScreen';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import RecordVoiceScreen from './src/screens/RecordVoiceScreen';
import DiaryDetailScreen from './src/screens/DiaryDetailScreen';
import TextEntryScreen from './src/screens/TextEntryScreen';

// DiaryProvider를 import 합니다.
import { DiaryProvider } from './src/context/DiaryContext';

export type RootStackParamList = {
  Onboarding: undefined;
  Permission: undefined;
  MainApp: undefined;
  RecordVoice: undefined;
  DiaryDetail: { diary: any };
  TextEntry: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    // DiaryProvider로 앱 전체를 감싸줍니다.
    <DiaryProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          {/* ... 나머지 스크린 설정은 그대로 ... */}
          <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Permission" component={PermissionScreen} options={{ title: '권한 설정' }} />
          <Stack.Screen name="MainApp" component={MainTabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="RecordVoice" component={RecordVoiceScreen} options={{ presentation: 'modal', title: '음성으로 기록하기', headerShown: true }} />
          <Stack.Screen name="DiaryDetail" component={DiaryDetailScreen} options={{ title: '기록 보기', headerBackTitleVisible: false }} />
          <Stack.Screen name="TextEntry" component={TextEntryScreen} options={{ presentation: 'modal', title: '텍스트로 기록하기', headerShown: true }} />
        </Stack.Navigator>
      </NavigationContainer>
    </DiaryProvider>
  );
}
export default App;