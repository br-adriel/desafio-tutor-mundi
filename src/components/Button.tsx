import styled from 'styled-components';

const CommonButton = styled.button`
  border: none;
  text-transform: uppercase;
  font-family: var(--serif-font);
  font-weight: 600;
  font-size: 1rem;
  padding: 8px 24px;
`;

export const PlainButton = styled(CommonButton)`
  color: #2cc6d0;
  background: transparent;
`;

export const RoundedButton = styled(CommonButton)`
  background-color: #2cc6d0;
  color: #fff;
  border-radius: 30px;
  box-shadow: -4px 12px 25px -10px #2eafb9;

  :disabled {
    background-color: #c8c8c8;
    box-shadow: -4px 12px 25px -10px rgba(0, 0, 0, 0.5);
  }
`;
