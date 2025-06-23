// src/screens/PermissionScreen.tsx

import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// 네비게이션 타입을 추가합니다.
type RootStackParamList = {
  Onboarding: undefined;
  Permission: undefined;
  MainApp: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList, 'Permission'>;

const PermissionScreen = ({ navigation }: Props) => {
  const handleGrantPermission = () => {
    // 메인 앱 화면으로 이동하고, 현재 화면(Permission)은 스택에서 제거합니다.
    navigation.replace('MainApp');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>권한 안내</Text>
        <Text style={styles.description}>
          Recory가 당신의 목소리를 기록하고, {'\n'}
          어울리는 사진을 찾아주기 위해 {'\n'}
          <Text style={styles.bold}>마이크</Text>와 <Text style={styles.bold}>사진첩</Text> 접근 권한이 필요해요.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleGrantPermission}>
        <Text style={styles.buttonText}>권한 허용하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 32,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1F2937',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    color: '#4B5563',
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#6366F1',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PermissionScreen;