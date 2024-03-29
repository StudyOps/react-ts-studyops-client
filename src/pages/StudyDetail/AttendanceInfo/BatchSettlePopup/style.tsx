import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem;
  max-width: 90%;
  border-radius: 0.1875rem;
  background: #fff;
  box-sizing: border-box;
  width: 37rem;
  height: 40rem;
  box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: start;
  max-height: 70vh;
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  font-size: 1.3rem;
  font-weight: 500;
  > div {
    color: var(--color-gray2);
    cursor: pointer;
    font-size: 1rem;
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  > :last-child {
    flex-grow: 1;
  }
`;

export const SelectDateForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.5rem;
    color: var(--color-gray1);
    font-size: 0.9rem;
    font-weight: 500;
    > div {
      flex-grow: 1;
    }
  }
`;

export const SettleListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: space-between;
  height: 80%;
`;

export const SubTitle = styled.div`
  color: #000;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  > div {
    margin-top: 0.5rem;
    color: var(--color-gray2);
    font-size: 0.775rem;
    font-weight: 400;
  }
`;

export const NoSchedule = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: var(--color-gray2);
  padding: 3rem 0;
`;

export const TotalCostDiv = styled.div`
  text-align: end;
  padding-top: 1.5rem;
  color: var(--color-primary);
  font-size: 1.7rem;
  font-weight: 700;
  border-top: 1px solid var(--color-gray4);
  > span {
    color: var(--color-gray1);
    font-size: 1rem;
    font-weight: 500;
    margin-right: 0.5rem;
  }
`;
