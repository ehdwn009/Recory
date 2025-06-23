// src/screens/DiaryDetailScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';

type RootStackParamList = {
  DiaryDetail: { diary: any };
};
type Props = NativeStackScreenProps<RootStackParamList, 'DiaryDetail'>;

const DiaryDetailScreen = ({ route }: Props) => {
  const { diary } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={{ uri: diary.imageUrl }} style={styles.headerImage} />
        <View style={styles.contentContainer}>
          <View style={styles.playerContainer}>
            <View>
              <Text style={styles.playerTitle}>원본 음성</Text>
              <Text style={styles.playerDate}>{diary.date}</Text>
            </View>
            <TouchableOpacity style={styles.playButton}>
              <Icon name="play" size={24} color="white" style={{ marginLeft: 3 }} />
            </TouchableOpacity>
          </View>
          <Text style={styles.fullText}>{diary.summary} 이 부분은 원래 AI가 생성한 전체 텍스트가 들어갈 자리입니다. 지금은 요약 내용으로 대체합니다.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: 300,
  },
  contentContainer: {
    padding: 20,
  },
  playerContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  playerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  playerDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  playButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#6366F1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#444',
  },
});

export default DiaryDetailScreen;