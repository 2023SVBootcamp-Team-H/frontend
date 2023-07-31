import { atom } from 'recoil';

// atom은 recoil의 기본적인 state를 정의하는 것

const windowWidthState = atom<number>({
  key: 'windowWidthState',
  default: 0,
});

const windowHeightState = atom<number>({
  key: 'windowHeightState',
  default: 0,
});

// auido play state
const audioState = atom<boolean>({
  key: 'audioState',
  default: false,
});

const audioVolumeState = atom<number>({
  key: 'audioVolumeState',
  default: 0,
});

// 카테고리(string)
const categoryState = atom<string>({
  key: 'categoryState', // unique ID (다른 atoms/selectors을 구별하기 위해서)
  default: '', // default는 atom의 초기값
});

const activeButtonState = atom<string | null>({
  key: 'activeButtonState',
  default: null,
});

// 인격(string)
const personalityState = atom<string>({
  key: 'personalityState',
  default: '',
});

// 나이(number)
const ageState = atom<number>({
  key: 'ageState',
  default: 0,
});

// 성별(string)
const genderState = atom<string>({
  key: 'genderState',
  default: '',
});

// 고민 내용(string)
const contentState = atom<string>({
  key: 'contentState',
  default: '',
});
// 고민 답변 ID(number)
const answeridState = atom<number>({
  key: 'answeridState',
  default: 0,
});

type itemType = {
  personality_name: string;
  image_url: string;
  avg: number;
};
// 별점 평균(number) - 이 데이터 가지고 *20%를 해서 인격별 인기도 통계
const avgState = atom<itemType[]>({
  key: 'avgState',
  default: [],
});
//
const loadingState = atom<number>({
  key: 'loadingState',
  default: 0,
});

const messageState = atom<string>({
  key: 'messageState',
  default: '',
});

const likeState = atom<number>({
  key: 'likeState',
  default: 0,
});

const selectedRatingState = atom<number>({
  key: 'selectedRatingState',
  default: 0,
});

// 서버에서 받아오는 배열 데이터
export interface ResultElement {
  personality_name?: string;
  image_url?: string;
  avg?: number;
}

const dataState = atom<ResultElement[]>({
  key: 'dataState',
  default: [],
});

// 통계 페이지에서 사용하는 데이터(여성 1위 인격)
const femaleState = atom<any>({
  key: 'femaleState',
  default: [],
});

// 통계 페이지에서 사용하는 데이터(남성 1위 인격)
const maleState = atom<any>({
  key: 'maleState',
  default: [],
});

const charcterButtonState = atom<string>({
  key: 'charcterButtonState',
  default: '',
});

const nicknameState = atom<string>({
  key: 'nicknameState',
  default: '',
});

export {
  categoryState,
  activeButtonState,
  personalityState,
  ageState,
  genderState,
  contentState,
  answeridState,
  avgState,
  loadingState,
  messageState,
  likeState,
  selectedRatingState,
  dataState,
  femaleState,
  maleState,
  charcterButtonState,
  nicknameState,
  windowWidthState,
  windowHeightState,
  audioState,
  audioVolumeState,
};
