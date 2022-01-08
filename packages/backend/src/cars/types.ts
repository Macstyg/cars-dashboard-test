export interface Car {
  id: string;
  vendor: string;
  model: string;
  year: number;
  plate: string;
  createdDate: Date;
  updatedDate: Date;
  image: string | null;
}
