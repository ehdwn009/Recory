// src/navigation/MainTabNavigator.tsx (최종 완성본)
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

// 화면들을 불러옵니다.
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import SearchScreen from '../screens/SearchScreen';
import MoreScreen from '../screens/MoreScreen';

const Tab = createBottomTabNavigator();

// 중앙의 커스텀 버튼 컴포넌트
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -25, // 버튼이 위로 떠 있는 정도
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow
    }}
    onPress={onPress}
  >
    <View style={{
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#6366F1'
    }}>
      {children}
    </View>
  </TouchableOpacity>
);

const MainTabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true, // 글씨가 보이도록 다시 켭니다.
        tabBarLabelStyle: { fontSize: 12, paddingBottom: 5 }, // 라벨 스타일
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 80, // 높이를 살짝 늘립니다.
          ...styles.shadow
        },
        tabBarActiveTintColor: '#6366F1',
        tabBarInactiveTintColor: 'gray',
        headerShown: true, // 모든 탭에 기본 헤더를 보여줍니다.
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        title: '홈',
        tabBarIcon: ({ color, size }) => (<Icon name="home" color={color} size={size*1.1} />)
      }}/>
      <Tab.Screen name="Calendar" component={CalendarScreen} options={{
        title: '캘린더',
        tabBarIcon: ({ color, size }) => (<Icon name="calendar" color={color} size={size*1.1} />)
      }} />
      
      {/* 중앙의 기록하기 버튼 */}
      <Tab.Screen
        name="Record"
        // 이 화면은 실제로 보여주지 않을 것이므로 빈 컴포넌트를 연결합니다.
        component={() => null} 
        options={{
          // 아이콘과 라벨을 버튼 안에 직접 만듭니다.
          tabBarButton: () => (
            <CustomTabBarButton onPress={() => navigation.navigate('RecordVoice')}>
                <Icon name="plus" color="#FFF" size={30} style={{alignSelf: 'center', marginTop: 20}} />
            </CustomTabBarButton>
          ),
        }}
      />

      <Tab.Screen name="Search" component={SearchScreen} options={{
        title: '검색',
        tabBarIcon: ({ color, size }) => (<Icon name="search" color={color} size={size*1.1} />)
      }}/>
      <Tab.Screen name="More" component={MoreScreen} options={{
        title: '더보기',
        tabBarIcon: ({ color, size }) => (<Icon name="more-horizontal" color={color} size={size*1.1} />)
      }}/>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
});

export default MainTabNavigator;