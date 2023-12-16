class ProdutosDoPerfil {
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string
  id: number

  constructor(
    nome: string,
    descricao: string,
    foto: string,
    id: number,
    preco: number,
    porcao: string
  ) {
    this.nome = nome
    this.descricao = descricao
    this.foto = foto
    this.preco = preco
    this.porcao = porcao
    this.id = id
  }
}

export default ProdutosDoPerfil
