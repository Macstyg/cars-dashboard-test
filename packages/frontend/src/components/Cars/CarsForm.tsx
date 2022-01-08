import React, { memo, useCallback, useState } from 'react';
import { Grid } from '@mui/material';
import * as yup from 'yup';
import getOr from 'lodash/fp/getOr';

import Form from '../Form/Form';
import Input from '../Form/Input';
import SubmitButton from '../Form/SubmitButton';
import DropZone from '../DropZone/DropZone';
import { Car } from '../../types';

interface Props {
  defaultValues?: Car;
  onSubmit: (values: any) => void;
}

export type NewCarValues = {
  vendor: string;
  model: string;
  year: number;
  plate: string;
};

const schema = yup.object().shape({
  vendor: yup.string().required(),
  model: yup.string().required(),
  year: yup.number().positive().integer().required(),
  plate: yup.string().required(),
});

const createDefaultValues = (values?: Car) => ({
  vendor: getOr('', 'vendor', values),
  model: getOr('', 'model', values),
  year: getOr(2021, 'year', values),
  plate: getOr('', 'plate', values),
});

const CarForm: React.FC<Props> = ({ onSubmit, defaultValues }) => {
  const [image, setImage] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    console.log('acceptedFiles', acceptedFiles);
    setImage(acceptedFiles[0]);
  }, []);
  const handleSubmit = (data: NewCarValues) => {
    onSubmit({ ...data, image });
  };
  return (
    <Form
      onSubmit={handleSubmit}
      schema={schema}
      defaultValues={createDefaultValues(defaultValues)}
    >
      <Grid container justifyContent="center" spacing={2}>
        <Grid item md={6}>
          <DropZone onDrop={onDrop} />
        </Grid>
        <Grid item md={6}>
          <Input name="vendor" label="Car vendor" />
          <Input name="model" label="Car model" />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Input name="year" label="Year" />
            </Grid>
            <Grid item xs={6}>
              <Input name="plate" label="Plate" />
            </Grid>
          </Grid>
        </Grid>
        <SubmitButton text={`${defaultValues ? 'Edit' : 'Create'} car`} />
      </Grid>
    </Form>
  );
};

export default memo(CarForm);
