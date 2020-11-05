import styled, { css } from 'styled-components';
import { Form as FormikForm } from 'formik';
import { borders } from '../../../../../common/styles/variables';

const { borderBottom } = borders;

export const Form = styled(FormikForm)`
  width: 100%;
`;

export const Body = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  border-bottom: ${borderBottom};
`;

export const FieldAdditionalStyles = css`flex: 1;`;
