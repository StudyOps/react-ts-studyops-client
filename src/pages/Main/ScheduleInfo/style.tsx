import styled from '@emotion/styled';

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  & h2 {
    font-weight: bold;
    font-size: 20px;
  }
  & div {
    display: flex;
    align-items: center;
    color: var(--color-crown);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const NoSchedule = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-textgrey);
  margin-top: 20%;
`;

export const Schedule = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  .time {
    color: var(--color-textmoregrey);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .title {
    font-weight: bold;
  }
`;
