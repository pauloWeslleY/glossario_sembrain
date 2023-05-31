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
              title="Choc Home Page"
              display={'flex'}
              alignItems={'center'}
            >
              <VisuallyHidden>{title}</VisuallyHidden>
            </chakra.a>
            <chakra.h1
              fontFamily={'Poppins'}
              fontSize={'xl'}
              fontWeight={'bold'}
              color={'zinc.100'}
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
              <Btn title="Home" onClick={() => navigate('/')} />
              <Btn title="Glossário" onClick={() => navigate('/glossary')} />
            </HStack>

            <NavBarMobile />
          </HStack>
        </Flex>
      </Container>
    </chakra.nav>
  )
}
export default memo(NavBar)
