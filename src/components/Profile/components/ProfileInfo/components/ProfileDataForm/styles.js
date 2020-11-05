import styled from 'styled-components';
import { Form } from 'formik';
import FadeIn from '../../../../../common/styles/FadeIn';

export const FadeInForm = styled(Form)`${FadeIn}`;

export const Socials = styled.div`
  margin-top: 10px;
  
  & > h6 {
    margin-bottom: 10px;
  }
`;

export const SocialsList = styled.div`
  padding-left: 20px;
`;
