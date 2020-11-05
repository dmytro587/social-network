import React from 'react';
import Textarea from './Textarea';
import Input from './Input';
import Checkbox from './Checkbox';

const FormikControl = ({ control, ...rest }) => {
   switch (control) {
      case 'input':
         return <Input { ...rest } />
      case 'textarea':
         return  <Textarea { ...rest } />
      case 'checkbox':
         return <Checkbox { ...rest } />
      default: return null;
   }
}

export default FormikControl;