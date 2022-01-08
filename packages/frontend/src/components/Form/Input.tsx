import React, { memo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

interface Props {
  name: string;
  label: string;
  inputProps?: TextFieldProps;
}

const Input: React.FC<Props> = ({ name, label, inputProps }) => {
  const { control, formState: { errors } } = useFormContext();

  const error = Boolean(errors[name]);
  const helperText = errors[name]?.message;

  return (
    <Controller
      render={({field}) => (
        <TextField
          {...field}
          {...inputProps}
          fullWidth
          id={name}
          name={name}
          margin="dense"
          label={label}
          variant="outlined"
          error={error}
          helperText={helperText}
        />
      )}
      name={name}
      control={control}
    />
  );
};

export default memo(Input);
