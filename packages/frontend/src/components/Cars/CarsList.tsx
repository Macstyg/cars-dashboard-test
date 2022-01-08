import { Grid } from '@mui/material';
import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCar } from '../../features/cars/cars.slice';
import { Car } from '../../types';
import Confirmation from '../Confirmation';
import CarItem from './CarItem';

interface Props {
  cars: Car[];
}

const CarsList: React.FC<Props> = ({ cars }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [idToDelete, setIdToDelete] = useState('');
  const handleOnEdit = (id: string) => {
    navigate(`/cars/${id}/edit`);
  };
  const handleOnDelete = (id: string) => {
    setIdToDelete(id);
  };
  const handleClose = () => {
    setIdToDelete('');
  };
  const handleConfirmDelete = () => {
    dispatch(deleteCar(idToDelete))
    setIdToDelete('');
  };
  return (
    <Grid container spacing={2}>
      <Confirmation
        description="All you notes assigned to this car will be deleted"
        open={Boolean(idToDelete)}
        onConfirm={handleConfirmDelete}
        onClose={handleClose}
      />
      {cars.map((car) => (
        <Grid item md={4} key={car.id}>
          <CarItem car={car} onDelete={handleOnDelete} onEdit={handleOnEdit} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CarsList
