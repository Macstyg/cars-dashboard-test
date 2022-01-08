import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { useAppSelector } from "../../../app/hooks"
import { RootState } from "../../../app/store"
import { Status } from "../../../types"
import { fetchCarById, fetchCars, selectCarById, selectCarsStatus } from "../cars.slice"

const useCar = (id: string) => {
    const dispatch = useDispatch()
    const car = useAppSelector((state: RootState) => selectCarById(state, id))
    const status = useAppSelector(selectCarsStatus)

    useEffect(() => {
        if (id && status === Status.IDLE) {
            dispatch(fetchCarById(id))
        }
        fetchCars()
    }, [dispatch, id, status])

    return {car, status}
}

export default useCar
