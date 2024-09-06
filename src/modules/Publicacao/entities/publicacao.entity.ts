export class PublicacaoEntity {
  id_publicacao: number
  cpf_id: string
  qtd_curtidas: number
  link_foto: string
  titulo: string
  dm_usuario: {
    cpf_id?: string
    nome?: string
    idade?: number
    email?: string
  }
}
