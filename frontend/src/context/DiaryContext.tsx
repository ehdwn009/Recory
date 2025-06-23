// src/context/DiaryContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

// 일기 항목의 데이터 타입을 정의합니다.
export interface DiaryEntry {
  id: string;
  date: string;
  summary: string;
  imageUrl: string;
}

// Context가 제공할 값들의 타입을 정의합니다.
interface DiaryContextType {
  entries: DiaryEntry[];
  addEntry: (entry: Omit<DiaryEntry, 'id' | 'date' | 'imageUrl'>) => void;
}

// Context를 생성합니다.
const DiaryContext = createContext<DiaryContextType | undefined>(undefined);

// 다른 컴포넌트에서 Context를 쉽게 사용하기 위한 커스텀 훅을 만듭니다.
export const useDiary = (): DiaryContextType => {
  const context = useContext(DiaryContext);
  if (!context) {
    throw new Error('useDiary must be used within a DiaryProvider');
  }
  return context;
};

// 기존의 mock data를 초기 상태로 사용합니다.
const initialEntries: DiaryEntry[] = [
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

// Context를 제공하는 Provider 컴포넌트입니다.
export const DiaryProvider = ({ children }: { children: ReactNode }) => {
  const [entries, setEntries] = useState<DiaryEntry[]>(initialEntries);

  const addEntry = (entryData: Omit<DiaryEntry, 'id' | 'date' | 'imageUrl'>) => {
    const newEntry: DiaryEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      summary: entryData.summary,
      // 새 텍스트 항목에는 임시로 기본 이미지를 사용합니다.
      imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop',
    };
    // 새 항목을 기존 목록의 맨 앞에 추가합니다.
    setEntries(prevEntries => [newEntry, ...prevEntries]);
  };

  return (
    <DiaryContext.Provider value={{ entries, addEntry }}>
      {children}
    </DiaryContext.Provider>
  );
};