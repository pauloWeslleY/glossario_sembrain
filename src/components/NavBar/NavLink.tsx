import { memo } from 'react'
import { NavLink as NavItem } from 'react-router-dom'
import { Link } from '@chakra-ui/react'

interface NavLinkProps {
  title: string
  label: string
  path: string
  onHandleClick?: () => void
}

export const MENU_LINKS: Array<NavLinkProps> = [
  {
    label: 'Home',
    title: 'Link que direciona para a pagina inicial do Glossário.',
    path: '/',
  },
  {
    label: 'Glossário',
    title: 'Link que direciona para a pagina contendo o conteúdo do Glossário.',
    path: '/glossary',
  },
]

function NavLink({ title, path, label, onHandleClick }: NavLinkProps) {
  return (
    <Link
      as={NavItem}
      to={path}
      p={2}
      aria-label={title}
      borderColor={'transparent'}
      borderStyle={'solid'}
      borderWidth={2}
      color={'zinc.200'}
      textAlign={'center'}
      fontFamily={'Poppins'}
      fontSize={'lg'}
      fontWeight={600}
      transition={'ease-in-out .2s'}
      _hover={{
        textDecoration: 'none',
        color: 'purple.700',
        borderStyle: 'solid',
        borderColor: 'purple.700',
        borderWidth: '2px',
        borderRadius: '6px',
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
      }}
      onClick={onHandleClick}
    >
      {label}
    </Link>
  )
}

export default memo(NavLink)
