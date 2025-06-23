// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import MemoryCard from '../components/MemoryCard';
import { useDiary } from '../context/DiaryContext'; // useDiary 훅을 import 합니다.

const HomeScreen = ({ navigation }) => {
  // useDiary 훅을 사용하여 중앙 저장소의 데이터를 가져옵니다.
  const { entries } = useDiary();

  // renderMemoryItem 함수를 수정합니다.
  const renderMemoryItem = ({ item }) => (
    // 불필요한 TouchableOpacity를 제거하고 MemoryCard에 onPress prop을 직접 전달합니다.
    <MemoryCard 
      item={item} 
      onPress={() => navigation.navigate('DiaryDetail', { diary: item })}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={entries}
        keyExtractor={item => item.id}
        renderItem={renderMemoryItem}
        contentContainerStyle={styles.listContainer}
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
    backgroundColor: '#F4F4F9',
  },
  listContainer: {
    padding: 20,
    paddingBottom: 120,
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