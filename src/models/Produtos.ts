class Produtos {
  title: string
  nota: string
  pais: string
  description: string
  destaque?: string
  image: string
  botao: string
  id: number

  constructor(
    title: string,
    nota: string,
    pais: string,
    description: string,
    destaque: string,
    image: string,
    botao: string,
    id: number
  ) {
    this.title = title
    this.nota = nota
    this.pais = pais
    this.description = description
    this.destaque = destaque
    this.image = image
    this.botao = botao
    this.id = id
  }
}

export default Produtos
