import styled from 'styled-components';

export const AvatarWrapper = styled.div`
   margin-right: 10px;
   width: ${ ({ width }) => width || '50px' };
   height: ${ ({ height }) => height || '50px' };
   overflow: hidden;
   border-radius: 50%;

   img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`;

