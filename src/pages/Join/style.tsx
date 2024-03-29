import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 5rem auto;
  max-width: 90%;
  width: 24rem;
  align-items: center;
`;

export const TitleDiv = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const JoinButton = styled.div`
  width: 100%;
  height: 3.375rem;
  color: #fff;
  text-align: center;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.1875rem;
  cursor: pointer;
`;

export const ErrorMsg = styled.div`
  color: var(--color-red);
  font-size: 0.875rem;
  margin-bottom: -24px;
  text-align: start;
`;

export const FormItemDescDiv = styled.div`
  color: var(--color-gray2);
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-align: start;
`;
