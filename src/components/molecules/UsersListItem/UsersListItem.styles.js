import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const StyledAverage = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50px;
  background-color: ${({ average, theme }) => {
    let averageNumber = parseFloat(average);
    if (averageNumber <= 2) return theme.colors.error;
    if (averageNumber <= 5) return theme.colors.warning;
    if (averageNumber <= 10) return theme.colors.success;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-right: 24px;
`;

export const StyledInfo = styled.div`
  padding: 25px 20px;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p:first-child {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
