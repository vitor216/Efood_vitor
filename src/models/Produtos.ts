class Produtos {
  title: string
  nota: string
  informacao: string[]
  description: string
  image: string
  id: number

  constructor(
    title: string,
    nota: string,
    informacao: string[],
    description: string,
    image: string,
    id: number
  ) {
    this.title = title
    this.nota = nota
    this.informacao = informacao
    this.description = description
    this.image = image
    this.id = id
  }
}

export default Produtos
