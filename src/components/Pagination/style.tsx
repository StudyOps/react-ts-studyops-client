import styled from '@emotion/styled';

export const PaginationWrapper = styled.div`
  display: flex;
  cursor: pointer;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const PageButton = styled.div<{ selected: boolean }>`
  padding: 0 0.8rem;
  font-weight: ${(props) => (props.selected ? '600' : '')};
  color: ${(props) =>
    props.selected ? 'var(--color-gray1)' : 'var(--color-gray2)'};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

export const PrevNextButton = styled.button`
  display: flex;
  gap: 0.7rem;
  text-align: center;
  color: var(--color-gray2);
  letter-spacing: 0.0625rem;
  margin: 0 0.7rem 0 0.7rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
