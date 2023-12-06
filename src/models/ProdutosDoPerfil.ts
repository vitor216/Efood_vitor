class ProdutosDoPerfil {
  title: string
  description: string
  image: string
  botao: string
  id: number

  constructor(
    title: string,
    description: string,
    image: string,
    botao: string,
    id: number
  ) {
    this.title = title
    this.description = description
    this.image = image
    this.botao = botao
    this.id = id
  }
}

export default ProdutosDoPerfil
