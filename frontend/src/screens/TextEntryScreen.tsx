// src/screens/TextEntryScreen.tsx

import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import { RootStackNavigationProp } from '../../App'; // App.tsx의 타입을 가져옵니다.

const TextEntryScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [text, setText] = useState('');

  const handleSave = () => {
    console.log('Saved Text:', text);
    // TODO: 실제 저장 로직 구현
    navigation.goBack();
  };

  // useLayoutEffect를 사용하여 navigation 옵션을 동적으로 설정합니다.
  // 이렇게 하면 헤더의 버튼이 화면 내부의 상태(text)에 접근할 수 있습니다.
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleSave} disabled={text.length === 0}>
          <Text style={[styles.headerButton, { fontWeight: 'bold', opacity: text.length === 0 ? 0.5 : 1 }]}>
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