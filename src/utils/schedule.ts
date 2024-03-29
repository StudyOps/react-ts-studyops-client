import dayjs from 'dayjs';

const colors = [
  '#EE97A4',
  '#F8D457',
  '#5DA7EF',
  '#F1A23E',
  '#D5D769',
  '#81C7BA',
  '#859FC1',
  '#B282CC',
];

export const settledColor = {
  true: '#5DA7EF',
  false: '#EE97A4',
};

export const getScheduleColor = (id: number): string => {
  return colors[id % 8];
};

const days = ['일', '월', '화', '수', '목', '금', '토'];

export const getDay = (date: dayjs.Dayjs): string => {
  const index = parseInt(date.format('d'));
  return days[index];
};

/**
 * api 응답으로 요일이 월요일 화요일 이런 형식으로 와서 이걸 숫자로 바꿔주거나 숫자를 저런 형식에 맞게 바꿔주는 아이들
 */
const dayStringNumMap: { [key: string]: number } = {
  일요일: 0,
  월요일: 1,
  화요일: 2,
  수요일: 3,
  목요일: 4,
  금요일: 5,
  토요일: 6,
};

const dayNumStringMap: { [key: number]: string } = {
  0: '일요일',
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일',
};

export const getDayNum = (dayString: string): number => {
  return dayStringNumMap[dayString];
};

export const getDayString = (dayString: number): string => {
  return dayNumStringMap[dayString];
};

/**
 * hh:mm 형태의 시간을 비교한다
 * @param timeStr1
 * @param timeStr2
 * @returns 0: 같음, 양수: 1이 큼, 음수: 2가 큼
 */
export const compareTime = (timeStr1: string, timeStr2: string): number => {
  const [hour1, minute1] = timeStr1.split(':').map(Number);
  const [hour2, minute2] = timeStr2.split(':').map(Number);
  if (hour1 - hour2 !== 0) return hour1 - hour2;
  return minute1 - minute2;
};

// 시작일로부터 얼마나 지났는지 구하는 함수
export const calcDiffDays = (targetDate: string) => {
  const today = dayjs().startOf('day');
  const target = dayjs(targetDate).startOf('day');
  const differenceInDays = target.diff(today, 'day');
  if (differenceInDays === 0) {
    return 'D-day';
  }
  if (differenceInDays > 0) {
    return `D-${differenceInDays}`;
  }
  return `D+${Math.abs(differenceInDays)}`;
};

// 시작시간으로부터 몇분 지났는지 구하는 함수
export const calcDiffMinutes = (targetTime: string) => {
  const [targetHour, targetMinute] = targetTime.split(':');
  const start = dayjs()
    .hour(parseInt(targetHour))
    .minute(parseInt(targetMinute))
    .second(0)
    .millisecond(0);
  const end = dayjs(); // 현재 시간
  const differenceInMinutes = end.diff(start, 'minutes');
  return Math.abs(differenceInMinutes);
};
