import * as S from './styles'

export type Props = {
  size?: 'small' | 'medium' | 'big'
  children: boolean
}

const Tag = ({ children, size = 'small' }: Props) => (
  <S.TagContainer size={size}>{children}</S.TagContainer>
)

export default Tag
