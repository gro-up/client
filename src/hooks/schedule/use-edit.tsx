import { useState } from 'react';

export const useEdit = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  return { isEdit, handleEdit, handleCancel };
};
