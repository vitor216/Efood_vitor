class Produtos {
  titulo: string
  destacado?: string | undefined
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  id: number

  constructor(
    titulo: string,
    destacado: string,
    tipo: string,
    avaliacao: number,
    descricao: string,
    capa: string,
    id: number
  ) {
    this.titulo = titulo
    this.destacado = destacado
    this.tipo = tipo
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.capa = capa
    this.id = id
  }
}

export default Produtos
