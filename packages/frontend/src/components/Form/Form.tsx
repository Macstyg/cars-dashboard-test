import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import type Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

interface Props {
  defaultValues?: Record<string, any>;
  schema: Yup.AnyObjectSchema;
  onSubmit: (data: any) => void;
}

const Form: React.FC<Props> = ({
  defaultValues,
  onSubmit,
  children,
  schema,
}) => {
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
