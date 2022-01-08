import { Car } from "../../types";

export const createCarTitle = ({ vendor, model }: Car) => `${vendor} ${model}`;
export const createCarYear = ({ year }: Car) => `Year: ${year}`;
