import styled from 'styled-components';
import livro from './assets/img/livro.png';
import { PlainButton, RoundedButton } from './components/Button';
import StarRating from './components/StarRating';
import './reset.css';
import './App.css';

function App() {
  return (
    <Main>
      <RatingSection>
        <img src={livro} alt='' />
        <h1 className='cursive'>Como foi a ajuda do tutor?</h1>
        <StarRating />
      </RatingSection>
      <ActionButtons>
        <PlainButton>Pular</PlainButton>
        <RoundedButton>Confirmar</RoundedButton>
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
`;

export default App;
