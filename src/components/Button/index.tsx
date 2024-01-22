import * as S from './styles'

export type Props = {
  size?: 'small' | 'medium' | 'big'
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary' | 'terciario'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary',
  size = 'small'
}: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonContainer
        variant={variant}
        type="button"
        title={title}
        onClick={onClick}
        size={size}
      >
        {children}
      </S.ButtonContainer>
    )
  }
  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
