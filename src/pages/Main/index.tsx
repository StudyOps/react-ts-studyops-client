import React, { useCallback, useEffect, useState } from 'react';
import {
  Container,
  Title,
  CardWrapper,
  ContentItem,
  PlusButton,
} from './style';
import StudyCard from './StudyCard';
import EmptyCard from './EmptyCard';
import dayjs from 'dayjs';
import ScheduleInfo from './ScheduleInfo';
import { IStudySchedule } from 'types/calendar';
import CalendarBlock from 'components/CalendarBlock';
import { IStudy } from 'types/db';
import { getDayNum, getScheduleColor } from 'utils/schedule';
import { isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';
import SkeletonCard from './SkeletonCard';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';

/**
 * 메인 페이지
 */
const Main = () => {
  const [selectDate, setSelectDate] = useState(dayjs());
  // 선택한 스터디 일정
  const [schedules, setSchedules] = useState<IStudySchedule[]>([]);

  // 참여중인 스터디 목록
  const { data: studyList, mutate: mutateStudyList } = useSWR<IStudy[]>(
    '/groups',
    fetcher,
  );

  // 초대받은 스터디 목록
  const { data: askStudyList, mutate: mutateAskStudyList } = useSWR<IStudy[]>(
    '/asks',
    fetcher,
  );

  // 데이터 로드 (참여중인 스터디 목록, 초대받은 스터디 목록)
  const loadData = useCallback(async () => {
    // 참여중인 스터디 목록 로드
    mutateStudyList();
    // 초대받은 스터디 목록 로드
    mutateAskStudyList();
  }, []);

  // 참여중인 스터디 일정 설정 (스터디 스케줄로 가공)
  const [studySchedules, setStudySchedules] = useState<IStudySchedule[]>([]);
  useEffect(() => {
    if (!studyList) return;
    const totalSchedules: IStudySchedule[] = [];
    studyList.forEach((study, studyIdx) => {
      const scheduleList: IStudySchedule[] = study.schedules.map(
        (schedule) => ({
          day: getDayNum(schedule.dayWeek).toString(),
          time: schedule.startTime,
          title: study.name,
          studyId: study.groupId,
          attendance: true,
          startDate: study.startDate,
          color: getScheduleColor(studyIdx),
          studyIdx,
        }),
      );
      scheduleList.forEach((schedule) => {
        totalSchedules.push(schedule);
      });
    });
    setStudySchedules(totalSchedules);
  }, [studyList]);

  const navigate = useNavigate();

  return (
    <Container>
      <ContentItem>
        <Title>스터디 일정이에요 🗓️</Title>
        <div>
          <CalendarBlock
            selectDate={selectDate}
            setSelectDate={setSelectDate}
            setSelectSchedules={setSchedules}
            schedules={studySchedules}
          >
            <ScheduleInfo sheduleDate={selectDate} schedules={schedules} />
          </CalendarBlock>
        </div>
      </ContentItem>
      <ContentItem>
        <Title>참여 중인 스터디에요 ✨</Title>
        <CardWrapper>
          {studyList === undefined ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              {studyList.map((study) => (
                <StudyCard key={study.groupId} study={study} />
              ))}
              {isEmpty(studyList) && (
                <EmptyCard>
                  새로운 스터디를
                  <br />
                  추가해보세요!
                  <PlusButton
                    onClick={() => {
                      navigate('/create');
                    }}
                    size="60"
                  />
                </EmptyCard>
              )}
            </>
          )}
        </CardWrapper>
      </ContentItem>
      <ContentItem>
        <Title>초대받은 스터디 목록이에요 💜</Title>
        <CardWrapper>
          {askStudyList === undefined ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            <>
              {askStudyList?.map((study) => (
                <StudyCard
                  key={study.groupId}
                  study={study}
                  isInvite
                  loadData={loadData}
                />
              ))}
              {isEmpty(askStudyList) && (
                <EmptyCard>
                  아직 초대받은
                  <br />
                  스터디가 없어요 😭
                </EmptyCard>
              )}
            </>
          )}
        </CardWrapper>
      </ContentItem>
    </Container>
  );
};

export default Main;
