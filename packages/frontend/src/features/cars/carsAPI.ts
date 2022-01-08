import { Car, CreateCarDto, ID, UpdateCarPayload } from '../../types';
import api from '../../utils/api'

export const fetchCarsApi = async (): Promise<Car[]> => {
  const {data} = await api.get('/cars')
  console.log('data', data);
  return data
  
}

export const fetchCarApi = async (id: string): Promise<Car> => {
  const {data} = await api.get(`/cars/${id}`)
  return data
}

export const createCarApi = async (body: CreateCarDto): Promise<Car> => {
  const {data} = await api.post('/cars', body)
  return data
}

export const updateCarApi = async ({id, body}: UpdateCarPayload): Promise<Car> => {
  const {data} = await api.patch(`/cars/${id}`, body)
  return data
}

export const deleteCarApi = async (id: ID): Promise<Car> => {
  const {data} = await api.delete(`/cars/${id}`)
  return data
}

