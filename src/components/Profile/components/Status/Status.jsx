import React, { useEffect, useState } from 'react';
import * as S from './styles';

const Status = ({ status, saveStatus }) => {

   const [editMode, setEditMode] = useState(false);
   const [localStatus, setLocalStatus] = useState(status);

   const onStatusBlur = () => {
      if (status !== localStatus) {
         saveStatus(localStatus);
      }
      setEditMode(false);
   }

   useEffect(() => {
      setLocalStatus(status);
   }, [status]);

   return (
      <div>
         {
            !editMode &&
            <span onDoubleClick={ () => setEditMode(true) }>
               { status }
            </span>
         }

         {
            editMode &&
            <S.Input
               name="status"
               type="text"
               value={ localStatus }
               onChange={ e => setLocalStatus(e.target.value) }
               onBlur={ onStatusBlur }
               autoFocus
            />
         }

      </div>
   );
}

export default Status;