import { memo } from 'react'
import {
  chakra,
  Box,
  Flex,
  VisuallyHidden,
  HStack,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Container,
} from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { Btn } from '../Button'

interface NavBarProps {
  title: string
}

const NavBar = ({ title }: NavBarProps) => {
  const mobileNav = useDisclosure()
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
              <Btn title="Glossário" onClick={() => navigate('/symbol')} />
            </HStack>

            <Box display={{ base: 'inline-flex', md: 'none' }}>
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: 'inherit' }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={'violet.400'}
                spacing={3}
                rounded="sm"
                shadow="sm"
                zIndex={2}
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Btn title="Home" onClick={() => navigate('/')} />
                <Btn title="Glossário" onClick={() => navigate('/symbol')} />
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </Container>
    </chakra.nav>
  )
}
export default memo(NavBar)
