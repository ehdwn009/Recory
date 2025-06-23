// src/screens/TextEntryScreen.tsx
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, Text } from 'react-native';
import { RootStackNavigationProp } from '../../App';
import { useDiary } from '../context/DiaryContext'; // useDiary 훅을 import 합니다.

const TextEntryScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [text, setText] = useState('');
  const { addEntry } = useDiary(); // addEntry 함수를 가져옵니다.

  const handleSave = () => {
    if (text.trim().length > 0) {
      // addEntry 함수를 호출하여 새 일기를 추가합니다.
      addEntry({ summary: text });
      navigation.goBack(); // 저장 후 이전 화면으로 돌아갑니다.
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleSave} disabled={text.trim().length === 0}>
          <Text style={[styles.headerButton, { fontWeight: 'bold', opacity: text.trim().length === 0 ? 0.5 : 1 }]}>
            완료
          </Text>
        </TouchableOpacity>
      ),
      headerLeft: () => (
         <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerButton}>취소</Text>
        </TouchableOpacity>
      )
    });
  }, [navigation, text]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      <SafeAreaView style={styles.safeArea}>
        <TextInput
          style={styles.textInput}
          multiline
          placeholder="오늘 어떤 일이 있었나요? 당신의 이야기를 들려주세요."
          placeholderTextColor="#A1A1AA"
          value={text}
          onChangeText={setText}
          autoFocus={true}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  safeArea: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    padding: 20,
    fontSize: 16,
    lineHeight: 24,
    textAlignVertical: 'top',
  },
  headerButton: {
    color: '#6366F1',
    fontSize: 16,
    paddingHorizontal: 10,
  }
});

export default TextEntryScreen;