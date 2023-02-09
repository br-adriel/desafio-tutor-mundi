import styled from 'styled-components';
import livro from '../assets/img/livro.png';
import StarRating from './StarRating';

export default function RatingSection() {
  return (
    <Wrapper>
      <img src={livro} alt='' />
      <h1 className='cursive'>Como foi a ajuda do tutor?</h1>
      <StarRating />
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
