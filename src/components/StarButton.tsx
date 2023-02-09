import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import estrela_cheia from '../assets/img/estrela_cheia.svg';
import estrela_vazia from '../assets/img/estrela_vazia.svg';

interface Props extends ComponentPropsWithoutRef<'button'> {
  checked: boolean;
}

function StarButton({ checked, ...rest }: Props) {
  return (
    <Button {...rest}>
      {checked ? (
        <img src={estrela_cheia} alt='Estrela preenchida' />
      ) : (
        <img src={estrela_vazia} alt='Estrela não preenchida' />
      )}
    </Button>
  );
}

const Button = styled.button`
  background: transparent;
  border: none;
  display: flex;

  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
`;

export default StarButton;
