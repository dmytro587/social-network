import styled from 'styled-components';

export const ButtonWrapper = styled.div`
   text-align: ${ props =>
   props.center
      ? 'center'
      : props.right
      ? 'right' : 'left'
}     
`;