import React, { memo } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { createCarTitle, createCarYear } from './utils';
import { Car } from '../../types';

interface Props {
  car: Car;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const CarItem: React.FC<Props> = ({ car, onDelete, onEdit }) => {
  return (
    <Card key={car.plate} sx={{maxWidth: 384}}>
      <CardHeader
        action={
          <>
            <IconButton onClick={() => onEdit(car.id)}>
              <Edit />
            </IconButton>
            <IconButton onClick={() => onDelete(car.id)}>
              <Delete />
            </IconButton>
          </>
        }
        title={createCarTitle(car)}
        subheader={createCarYear(car)}
      ></CardHeader>
      <CardMedia sx={{
                height: 0,
                paddingTop: '56.25%', // 16:9
            }} image={car.image || ''} 
      />
      <CardContent>
        <Typography variant="body2">Plate number: {car.plate}</Typography>
      </CardContent>
    </Card>
  );
};

export default memo(CarItem);
