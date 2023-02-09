import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { rate, selectRating } from '../features/ratingSlice';
import StarButton from './StarButton';

function StarRating() {
  const { starsStatus } = useSelector(selectRating);
  const dispatch = useDispatch();

  const clickStar = (index: number) => {
    if (index >= 0 && index < starsStatus.length) {
      const newStarsStatus = [];
      for (let i = 0; i < starsStatus.length; i++) {
        if (i <= index) newStarsStatus.push(1);
        else newStarsStatus.push(0);
      }
      dispatch(rate(newStarsStatus));
    }
  };

  return (
    <Row>
      {starsStatus.map((star, index) => {
        return (
          <StarButton
            key={index}
            checked={!!star}
            onClick={() => clickStar(index)}
          />
        );
      })}
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  align-items: center;
`;

export default StarRating;
