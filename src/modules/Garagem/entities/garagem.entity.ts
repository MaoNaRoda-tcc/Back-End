import { ModeloEntity } from "src/modules/Modelos/entities/modelo.entity";

export class GaragemEntity {
  id_modelo: number;
  placa: string;
  cpf_id: string
  dm_modelos: Partial<ModeloEntity>
}
