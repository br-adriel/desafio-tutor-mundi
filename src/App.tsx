import { useSelector } from 'react-redux';
import styled from 'styled-components';
import './App.css';
import livro from './assets/img/livro.png';
import { PlainButton, RoundedButton } from './components/Button';
import StarRating from './components/StarRating';
import { selectRating } from './features/ratingSlice';

function App() {
  const { untouched, starsStatus } = useSelector(selectRating);

  const printStars = () => {
    const stars = starsStatus.reduce((a, b) => a + b, 0);
    console.log(stars);
  };

  return (
    <Main>
      <RatingSection>
        <img src={livro} alt='' />
        <h1 className='cursive'>Como foi a ajuda do tutor?</h1>
        <StarRating />
      </RatingSection>
      <ActionButtons>
        <PlainButton>Pular</PlainButton>
        <RoundedButton disabled={untouched} onClick={printStars}>
          Confirmar
        </RoundedButton>
      </ActionButtons>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const RatingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 20px;
  padding: 10px 30px;

  h1 {
    text-align: center;
  }
`;

const ActionButtons = styled.div`
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

export default App;
