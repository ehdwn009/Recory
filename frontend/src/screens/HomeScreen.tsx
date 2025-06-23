// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import MemoryCard from '../components/MemoryCard'; // 방금 만든 카드 컴포넌트 불러오기

// 화면 테스트를 위한 가짜 데이터(Mock Data)
const mockMemories = [
  {
    id: '1',
    date: '2025년 6월 22일',
    summary: '친구들과 함께한 강릉 여행, 파도 소리가 아직도 귓가에 맴도는 것 같다. 정말 즐거운 하루!',
    imageUrl: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '2',
    date: '2025년 6월 20일',
    summary: '프로젝트 마감 때문에 힘들었지만, 멋지게 해낸 나 자신에게 칭찬해주고 싶은 날. 동료들과 마신 커피가 유난히 달았다.',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop',
  },
  {
    id: '3',
    date: '2025년 6월 18일',
    summary: '오랜만에 혼자만의 시간을 가졌다. 카페에 앉아 책을 읽고, 생각을 정리하는 소중한 시간이었다. 재충전 완료!',
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop',
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* FlatList는 스크롤 가능한 리스트를 효율적으로 만들어줍니다. */}
      <FlatList
        data={mockMemories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <MemoryCard item={item} />}
        contentContainerStyle={styles.listContainer}
        // 리스트의 맨 위에 AI 스마트 프롬프트를 추가합니다.
        ListHeaderComponent={
          <View style={styles.promptContainer}>
            <Text style={styles.promptText}>"오늘 기억에 남는 순간을 들려주세요."</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F4F9', // 배경색을 약간 변경
  },
  listContainer: {
    padding: 20,
    paddingBottom: 120, // 하단 탭 바에 가려지지 않도록 충분한 패딩 추가
  },
  promptContainer: {
    backgroundColor: '#E8E8FF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    alignItems: 'center',
  },
  promptText: {
    fontSize: 16,
    color: '#4A4A6A',
    fontWeight: '500',
  },
});

export default HomeScreen;