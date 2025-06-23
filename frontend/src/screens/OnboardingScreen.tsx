// src/screens/OnboardingScreen.tsx

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// 네비게이션 타입을 정의합니다.
type RootStackParamList = {
  Onboarding: undefined;
  Permission: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

const OnboardingScreen = ({ navigation }: Props) => {
  // 버튼을 누르면 Permission 화면으로 이동하는 함수
  const handlePressLogin = () => {
    navigation.navigate('Permission');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.mainContent}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Recory</Text>
        </View>
        <Text style={styles.title}>Recory</Text>
        <Text style={styles.visionText}>
          "AI 에이전트가 당신의 목소리를{'\n'}가장 생생한 추억으로 되살립니다"
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePressLogin} style={[styles.socialButton, styles.kakaoButton]}>
          <Text style={styles.kakaoButtonText}>카카오 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePressLogin} style={[styles.socialButton, styles.googleButton]}>
          <Text style={styles.googleButtonText}>Google로 계속하기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePressLogin} style={[styles.socialButton, styles.appleButton]}>
          <Text style={styles.appleButtonText}>Apple로 계속하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// 스타일 시트는 이전과 동일합니다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
    padding: 32,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: 96,
    height: 96,
    backgroundColor: 'white',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6366F1',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  visionText: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
  },
  socialButton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
  },
  kakaoButtonText: {
    color: '#191919',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  googleButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: 'bold',
  },
  appleButton: {
    backgroundColor: '#000000',
  },
  appleButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;