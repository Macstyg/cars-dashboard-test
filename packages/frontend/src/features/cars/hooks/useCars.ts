import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../../../app/hooks"
import { Status } from "../../../types"
import { fetchCars, selectCars, selectCarsStatus } from "../cars.slice"

const useCars = () => {
    const dispatch = useDispatch()
    const cars = useAppSelector(selectCars)
    const status = useAppSelector(selectCarsStatus)

    useEffect(() => {
        
        if (status === Status.IDLE) {
            dispatch(fetchCars())
        }
    }, [status, dispatch])

    return {cars, status}
}

export default useCars
