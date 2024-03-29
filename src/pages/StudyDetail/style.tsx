import styled from '@emotion/styled';
import theme from 'styles/theme';

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: center;
  & div {
    font-size: 14px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const StudyOutlineDiv = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
  @media ${theme.device.phone} {
    gap: 0.5rem;
    row-gap: 1.5rem;
  }
`;

export const DdayTag = styled.div`
  display: inline-flex;
  padding: 0.5rem 1.625rem;
  justify-content: center;
  align-items: center;
  border-radius: 3.125rem;
  background: #eee3ff;
  color: var(--color-primary);
  font-size: 0.9375rem;
  font-weight: 600;
`;

export const StudyTitle = styled.div`
  color: var(--color-gray1);
  font-size: 1.8rem;
  font-weight: 700;
  padding-right: 1.5rem;
  border-right: 1px solid var(--color-gray1);
  @media ${theme.device.phone} {
    border-right: none;
    width: 100%;
  }
`;

export const MemberInfoDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  > span {
    padding: 0 0.62rem;
    font-weight: 400;
    > span {
      font-weight: 700;
    }
  }
`;

export const DescriptionDiv = styled.div`
  color: var(--color-gray2);
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1.44rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 1rem;
`;

export const StartDateDiv = styled.div`
  flex-grow: 1;
  text-align: end;
  color: var(--color-gray2);
  font-weight: 500;
`;

export const TabWrapper = styled.div`
  display: flex;
  /* > div {
    border-right: none;
  }
  > :last-child {
    border-right: 0.5px solid #8c8c8c;
  } */
  position: sticky;
  /* border: 0.5px solid #8c8c8c; */
  top: 4.2rem;
  z-index: 1;
  @media ${theme.device.phone} {
    margin: 0 -1rem;
    /* > :last-child {
      border-right: none;
    }
    > :first-of-type {
      border-left: none;
    } */
  }
`;

export const TabDiv = styled.div<{ selected?: boolean }>`
  width: 25%;
  /* border: 0.5px solid #8c8c8c; */
  /* background-color: var(--color-gray4); */
  background-color: #fff;
  border-bottom: 0.5px solid #8c8c8c;
  display: inline-flex;
  padding: 1.1875rem 0;
  justify-content: center;
  align-items: center;
  color: var(--color-gray2);
  font-weight: 500;
  cursor: pointer;
  ${(props) =>
    props.selected && 'border-bottom: 2.5px solid var(--color-primary);'}
  ${(props) => props.selected && 'margin-bottom: -1px;'}
  /* ${(props) => props.selected && 'border-bottom: none;'} */
  /* ${(props) => props.selected && 'background: #fff;'} */
  ${(props) => props.selected && 'color: var(--color-primary);'}
  ${(props) => props.selected && 'font-weight: 700;'}
`;

export const ContentTitle = styled.div`
  > span {
    color: var(--color-gray2);
    padding-top: 0.3rem;
  }
  font-size: 1.4rem;
  font-weight: 500;
  padding-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const EditButton = styled.div`
  border-radius: 20px;
  padding: 0.2rem 0.7rem;
  color: var(--color-gray2);
  background-color: var(--color-gray4);
  font-weight: 500;
  font-size: 0.8rem;
  cursor: pointer;
`;
