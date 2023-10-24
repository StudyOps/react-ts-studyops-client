import React, { useEffect, useState } from 'react';
import { Title, Content, NoSchedule, Schedule } from './style';
import dayjs from 'dayjs';
import { IStudySchedule } from 'types/calendar';
import { isEmpty } from 'lodash';
import ScheduleDot from 'components/ScheduleDot';
import { getScheduleColor } from 'utils/schedule';

/**
 * 선택한 날짜의 일정 컴포넌트
 */
function ScheduleInfo({
  sheduleDate,
  schedules,
}: {
  sheduleDate: dayjs.Dayjs;
  schedules: IStudySchedule[];
}) {
  const [sortedSchedules, setSortedSchedules] = useState<IStudySchedule[]>([]);

  useEffect(() => {
    function parseTime(timeStr: string): Date {
      const [hours, minutes] = timeStr.split(':').map(Number);
      const time = new Date();
      time.setHours(hours);
      time.setMinutes(minutes);
      return time;
    }
    setSortedSchedules(
      schedules?.sort(
        (a, b) => parseTime(a.time).getTime() - parseTime(b.time).getTime(),
      ),
    );
  }, [schedules]);

  return (
    <>
      <Title>
        <div>{dayjs(sheduleDate).format('M월 D일')} 스터디 일정</div>
      </Title>
      <Content>
        {isEmpty(schedules) && (
          <NoSchedule>
            <div>스터디 일정이 없습니다.</div>
          </NoSchedule>
        )}
        {!isEmpty(sortedSchedules) &&
          sortedSchedules.map((item) => (
            <Schedule key={item.studyId}>
              <div className="time">
                <ScheduleDot color={getScheduleColor(item.studyId)} />
                <div>{item.time}</div>
              </div>
              <div className="title">{item.title}</div>
            </Schedule>
          ))}
      </Content>
    </>
  );
}

export default ScheduleInfo;
