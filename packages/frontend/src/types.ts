export type ID = string

export interface Car {
  id: string
  vendor: string;
  model: string;
  year: number;
  plate: string;
  createdDate: Date;
  updatedDate: Date;
  image: string | null;
}

export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed'
}

export interface CreateCarDto {
  vendor: string
  model: string
  year: number
  plate: string
}

export interface UpdateCarPayload {
  body: Partial<CreateCarDto>
  id: ID
}
