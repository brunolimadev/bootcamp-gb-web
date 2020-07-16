import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 200px;
    padding: 8px;
    border-radius: 4px;
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s;

    &::before {
      content: '';
      border-style: solid;
      border-width: 6px 6px 0 6px;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
