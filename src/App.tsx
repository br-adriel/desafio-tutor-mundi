import { useSelector } from 'react-redux';
import styled from 'styled-components';
import './App.css';
import { PlainButton, RoundedButton } from './components/Button';
import RatingSection from './components/RatingSection';
import { selectRating } from './features/ratingSlice';

function App() {
  const { untouched, starsStatus } = useSelector(selectRating);

  const printStars = () => {
    const stars = starsStatus.reduce((a, b) => a + b, 0);
    console.log(stars);
  };

  return (
    <Main>
      <RatingSection />
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
