import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectRating } from '../features/ratingSlice';
import { PlainButton, RoundedButton } from './Button';

export default function ActionButtons() {
  const { untouched, starsStatus } = useSelector(selectRating);

  const printStars = () => {
    const stars = starsStatus.reduce((a, b) => a + b, 0);
    console.log(stars);
  };

  return (
    <Wrapper>
      <PlainButton>Pular</PlainButton>
      <RoundedButton disabled={untouched} onClick={printStars}>
        Confirmar
      </RoundedButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    justify-content: center;
    padding-bottom: 40px;
  }
`;
