import styled from 'styled-components';
import './App.css';
import ActionButtons from './components/ActionButtons';
import RatingSection from './components/RatingSection';

function App() {
  return (
    <Main>
      <RatingSection />
      <ActionButtons />
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

export default App;
