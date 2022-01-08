import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";
import { Car, CreateCarDto, ID, Status, UpdateCarPayload } from "../../types";
import { groupById } from "../../utils/collections"
import { createCarApi, deleteCarApi, fetchCarApi, fetchCarsApi, updateCarApi } from "./carsAPI";

interface CarsState {
    byId: Record<ID, Car>,
    ids: ID[],
    status: Status
}

const initialState: CarsState = {
    byId: {},
    ids: [],
    status: Status.IDLE
}

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async () => {
    return await fetchCarsApi();
  }
);

export const fetchCarById = createAsyncThunk(
  'cars/fetchCar',
  async (id: string) => {
    return await fetchCarApi(id)
  }
)

export const createCar = createAsyncThunk(
  'cars/createCar',
  async (body: CreateCarDto) => {
    return await createCarApi(body)
  }
)

export const updateCar = createAsyncThunk(
  'cars/updateCar',
  async (payload: UpdateCarPayload) => {
    return await updateCarApi(payload)
  }
)

export const deleteCar = createAsyncThunk(
  'cars/deleteCar',
  async (id: ID) => {
     await deleteCarApi(id)
     return id
  }
)

export const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = Status.LOADING
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED
        const {ids, byId} = groupById(action.payload)
        state.byId = byId;
        state.ids = ids
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = Status.FAILED
      })
      .addCase(fetchCarById.pending, (state) => {
        state.status = Status.LOADING
      })
      .addCase(fetchCarById.fulfilled, (state, {payload}) => {
        state.status = Status.SUCCEEDED
        state.byId[payload.id] = payload
        state.ids.push(payload.id)
      })
      .addCase(createCar.pending, (state) => {
        state.status = Status.LOADING
      })
      .addCase(createCar.fulfilled, (state, {payload}) => {
        state.status = Status.SUCCEEDED
        state.byId[payload.id] = payload
        state.ids.push(payload.id)
      })
      .addCase(updateCar.pending, (state) => {
        state.status = Status.LOADING
      })
      .addCase(updateCar.fulfilled, (state, {payload}) => {
        state.status = Status.SUCCEEDED
        state.byId[payload.id] = payload
      })
      .addCase(deleteCar.pending, (state) => {
        state.status = Status.LOADING
      })
      .addCase(deleteCar.fulfilled, (state, {payload}) => {
        state.status = Status.SUCCEEDED
        delete state.byId[payload]
        state.ids = state.ids.filter(id => id !== payload)
      });
  },
})

export const selectCarsById = (state: RootState) => state.cars.byId
export const selectCarsIds = (state: RootState) => state.cars.ids
export const selectCars = createSelector(
  selectCarsById,
  selectCarsIds,
  (byId, ids) => ids.map(id => byId[id])
)
export const selectCarById = createSelector(
    selectCarsById,
    (_: RootState, id: ID) => id,
    (byId, id) => byId[id]
)
export const selectCarsStatus = (state: RootState) => state.cars.status

export default carsSlice.reducer;
