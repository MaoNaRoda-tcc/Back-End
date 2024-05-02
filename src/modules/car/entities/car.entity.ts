export class CarEntity {
  id: number;
  model: string;
  price: number;
  engineId?: number;
  engine: {
    id: number;
    name: string;
    displacement: number;
    horsepower: number;
    torque: number;
  };
}
