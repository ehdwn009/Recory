// src/components/MemoryCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

// 카드가 받을 데이터의 타입을 정의합니다.
type MemoryCardProps = {
  item: {
    id: string;
    date: string;
    summary: string;
    imageUrl: string;
  };
};

const MemoryCard = ({ item }: MemoryCardProps) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardDate}>{item.date}</Text>
        <Text style={styles.cardSummary} numberOfLines={2}>{item.summary}</Text>
        <View style={styles.waveformContainer}>
          <Icon name="bar-chart-2" size={20} color="#A0A0A0" style={styles.waveformIcon} />
          <View style={styles.waveformLine} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  cardDate: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
  },
  cardSummary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    lineHeight: 22,
  },
  waveformContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  waveformIcon: {
    transform: [{ rotate: '90deg' }],
  },
  waveformLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#E0E0E0',
    marginLeft: 8,
  },
});

export default MemoryCard;