import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Flex,
  HStack,
  VisuallyHidden,
  chakra,
} from '@chakra-ui/react'
import { Btn } from '../Button'
import { NavBarMobile } from './index'

import { MENU_LINKS } from './NavLink'

interface NavBarProps {
  title: string
}

const NavBar = ({ title }: NavBarProps) => {
  const navigate = useNavigate()

  return (
    <chakra.nav
      bg={'violet.400'}
      w={'full'}
      px={{ base: 2, sm: 4 }}
      py={4}
      shadow={'md'}
    >
      <Container maxW={'7xl'}>
        <Flex align={'center'} justify={'space-between'} mx={'auto'}>
          <Flex>
            <chakra.a
              href="/"
              title="Titulo da pagina"
              display={'flex'}
              alignItems={'center'}
            >
              <VisuallyHidden>{title}</VisuallyHidden>
            </chakra.a>
            <chakra.h1
              fontFamily={'Poppins'}
              fontSize={'xl'}
              fontWeight={'bold'}
              color={'whiteAlpha.900'}
              ml={2}
            >
              {title}
            </chakra.h1>
          </Flex>
          <HStack display={'flex'} alignItems={'center'} spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color={'violet.600'}
              display={{ base: 'none', md: 'inline-flex' }}
            >
              {MENU_LINKS.map((props, i) => (
                <Btn
                  key={i}
                  aria-label={props.title}
                  title={props.label}
                  color={'whiteAlpha.900'}
                  onClick={() => navigate(props.path)}
                />
              ))}
            </HStack>
            <NavBarMobile />
          </HStack>
        </Flex>
      </Container>
    </chakra.nav>
  )
}
export default memo(NavBar)
