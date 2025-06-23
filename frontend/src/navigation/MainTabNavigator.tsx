// src/navigation/MainTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

// 화면들을 불러옵니다.
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import SearchScreen from '../screens/SearchScreen';
import MoreScreen from '../screens/MoreScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Calendar') {
            iconName = 'calendar';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'More') {
            iconName = 'more-horizontal';
          }

          return <Icon name={iconName as string} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6366F1', // 활성 탭 색상
        tabBarInactiveTintColor: 'gray', // 비활성 탭 색상
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: '홈' }}/>
      <Tab.Screen name="Calendar" component={CalendarScreen} options={{ title: '캘린더' }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ title: '검색' }}/>
      <Tab.Screen name="More" component={MoreScreen} options={{ title: '더보기' }}/>
    </Tab.Navigator>
  );
};

export default MainTabNavigator;