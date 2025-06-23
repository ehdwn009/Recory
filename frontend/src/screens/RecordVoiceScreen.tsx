// src/screens/RecordVoiceScreen.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const RecordVoiceScreen = () => {
  // 화면의 상태를 관리하는 세 가지 변수
  // isRecording: 현재 녹음 중인지 여부
  // isProcessing: 녹음 완료 후 AI가 처리 중인지 여부
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // 녹음 시작/중지 버튼을 눌렀을 때의 동작
  const handleRecordPress = () => {
    if (isRecording) {
      // 녹음 중이었다면, 녹음을 멈추고 처리 상태로 변경
      setIsRecording(false);
      setIsProcessing(true);

      // AI 처리 시뮬레이션: 3초 후에 처리 완료
      setTimeout(() => {
        setIsProcessing(false);
        // TODO: 여기서 결과 확인 화면으로 이동하는 로직 추가
        // navigation.navigate('ResultScreen');
      }, 3000);

    } else {
      // 녹음 전이었다면, 녹음 시작
      setIsRecording(true);
    }
  };

  // 화면 렌더링 부분
  const renderContent = () => {
    // AI 처리 중일 때 보여줄 화면
    if (isProcessing) {
      return (
        <View style={styles.processingContainer}>
          {/* 기획서에 명시된 '마법' 같은 애니메이션을 위한 부분  */}
          <Text style={styles.processingText}>AI가 당신의 기억을 정리하고 있어요...</Text>
          <Text style={styles.processingSubText}>잠시만 기다려주세요.</Text>
        </View>
      );
    }

    // 녹음 전 또는 녹음 중일 때 보여줄 화면
    return (
      <>
        {/* 상단 안내 문구 */}
        <View style={styles.header}>
          <Text style={styles.title}>
            {isRecording ? "편하게 말씀해주세요" : "오늘 하루를 들려주세요"}
          </Text>
          <Text style={styles.subtitle}>
            {isRecording ? "완료되면 아래 버튼을 다시 눌러주세요" : "버튼을 눌러 녹음을 시작하세요"}
          </Text>
        </View>

        {/* 중앙의 목소리 반응 영역 (Orb)  */}
        <View style={styles.orbContainer}>
          <View style={[styles.orb, isRecording && styles.orbRecording]}>
            <Icon name="mic" size={40} color={isRecording ? 'white' : '#6366F1'} />
          </View>
        </View>

        {/* 하단 녹음 버튼 및 프라이버시 안내 */}
        <View style={styles.footer}>
          {/* 기획서의 프라이버시 강조 문구  */}
          <Text style={styles.privacyText}>
            <Icon name="lock" size={14} color="#888" /> 나만 볼 수 있어요
          </Text>
          <TouchableOpacity style={styles.recordButton} onPress={handleRecordPress}>
            <Icon name={isRecording ? "stop-circle" : "mic"} size={32} color="white" />
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderContent()}
    </SafeAreaView>
  );
};

// 스타일 시트
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
  },
  processingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  processingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  processingSubText: {
    fontSize: 16,
    color: '#4B5563',
  },
  header: {
    padding: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#4B5563',
  },
  orbContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orb: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  orbRecording: {
    backgroundColor: '#6366F1', // 녹음 중일 때 색상 변경
  },
  footer: {
    padding: 40,
    alignItems: 'center',
  },
  privacyText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  recordButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },
});

export default RecordVoiceScreen;