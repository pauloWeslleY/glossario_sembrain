import { memo } from 'react'
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Container,
} from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

interface NavBarProps {
  title: string
}

const NavBar = ({ title }: NavBarProps) => {
  const BACKGROUND_NAVBAR = useColorModeValue('whiteAlpha.400', 'violet.400')
  const mobileNav = useDisclosure()
  const navigate = useNavigate()

  return (
    <chakra.nav
      bg={BACKGROUND_NAVBAR}
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
              <Button
                fontFamily={'Poppins'}
                fontWeight={'regular'}
                variant={'outline'}
                onClick={() => navigate('/')}
              >
                Home
              </Button>
              <Button
                fontFamily={'Poppins'}
                fontWeight={'regular'}
                variant={'outline'}
                onClick={() => navigate('/symbol')}
              >
                Símbolos Básicos
              </Button>
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
                bg={BACKGROUND_NAVBAR}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost">
                  Features
                </Button>
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Company
                </Button>
                <Button w="full" variant="ghost">
                  Sign in
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </Container>
    </chakra.nav>
  )
}
export default memo(NavBar)
