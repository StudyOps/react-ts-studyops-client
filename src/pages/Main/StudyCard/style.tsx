import styled from '@emotion/styled';
import { ImageProps } from 'types/styleProps';

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-weight: bold;
  color: var(--gray1, #333);
  font-size: 1.125rem;
  font-weight: 700;
  & div {
    display: flex;
    align-items: center;
    color: var(--color-crown);
  }
`;

export const StartDate = styled.div`
  color: var(--color-textgrey);
  & span {
    font-weight: normal;
  }
`;

export const Description = styled.div<ImageProps>`
  width: 100%;
  word-break: keep-all;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: var(--gray2, #8c8c8c);
  font-size: 0.875rem;
  font-weight: 500;
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  border-radius: 3.125rem;
  background: var(--color-primarylight);
  color: var(--color-primary);
  padding: 0.19rem 0.7rem;
  font-size: 0.875rem;
  font-weight: 700;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.31rem;
  height: 100%;
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.7rem;
`;

export const HeaderDiv = styled.div`
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    > span {
      padding: 0 0.38rem;
      color: var(--gray2, #8c8c8c);
      font-size: 0.875rem;
      font-weight: 500;
    }
  }
  > div {
    & :first-child {
      padding-left: 0;
      border-right: 0.5px solid #8c8c8c;
    }
  }
`;

export const DdayTag = styled.div<{ isMinus?: boolean }>`
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 1.25rem;
  border: 1px solid #ff971d;
  display: inline-flex;
  padding: 0.125rem 0.5rem;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.isMinus ? 'white' : '#ff971d')};
  background-color: ${(props) => (props.isMinus ? '#ff971d' : 'white')};
`;

export const InfoItem = styled.div`
  display: flex;
  gap: 0.4rem;
  margin-top: 0.5rem;
  color: #000;
  font-size: 0.875rem;
  font-weight: 400;
  & b {
    font-weight: 700;
  }
`;

export const Icon = styled.div`
  color: var(--color-textlight);
  /* padding-top: 2px; */
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.37rem;
  padding-top: 1.25rem;
  border-top: 1px solid #ddd;
`;

export const Button = styled.button<{ yesButton?: boolean }>`
  width: 50%;
  display: inline-flex;
  padding: 0.5rem;
  justify-content: center;
  font-size: 0.875rem;
  align-items: center;
  border: none;
  border-radius: 0.1875rem;
  font-weight: ${(props) => (props.yesButton ? '700' : '500')};
  cursor: pointer;
  background-color: ${(props) =>
    props.yesButton ? 'var(--color-primary)' : '#ddd'};
  color: ${(props) => (props.yesButton ? 'white' : '#333')};
`;
