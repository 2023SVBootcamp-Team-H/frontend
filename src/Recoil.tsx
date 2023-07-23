import { atom } from 'recoil';

// atom은 recoil의 기본적인 state를 정의하는 것

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

// 인격 이미지URL(string)
const imageurlState = atom<string>({
  key: 'imageurlState',
  default: '',
});

// 고민 답변 ID(number) - 저장해둔 후, 이 데이터 가지고 별점 부여
const answeridState = atom<number>({
  key: 'answeridState',
  default: 0,
});

// 별점 평균(number) - 이 데이터 가지고 %로 값 변환
const avgState = atom<number>({
  key: 'avgState',
  default: 0,
});
const loadingState = atom<number>({
  key: 'loadingState',
  default: 0,
});

const messageState = atom<string>({
  key: 'messageState',
  default: '',
});

const likeState = atom<string>({
  key: 'likeState',
  default: '',
});

export {
  categoryState,
  activeButtonState,
  personalityState,
  ageState,
  genderState,
  contentState,
  imageurlState,
  answeridState,
  avgState,
  loadingState,
  messageState,
  likeState,
};
