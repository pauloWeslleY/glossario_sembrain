import { memo } from 'react'
import {
  Box,
  CloseButton,
  IconButton,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from './index'
import { MENU_LINKS } from './NavLink'

function NavBarMobile() {
  const mobileNav = useDisclosure()

  return (
    <Box display={{ base: 'inline-flex', md: 'none' }}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        aria-label="Abrir Menu de Navegação"
        fontSize={'20px'}
        color={'zinc.100'}
        variant={'ghost'}
        icon={<AiOutlineMenu />}
        onClick={mobileNav.onOpen}
      />

      <VStack
        pos={'absolute'}
        top={0}
        left={0}
        right={0}
        display={mobileNav.isOpen ? 'flex' : 'none'}
        flexDirection={'column'}
        p={2}
        pb={4}
        spacing={3}
        bg={'violet.400'}
        rounded={'sm'}
        shadow={'sm'}
        zIndex={2}
      >
        <CloseButton
          aria-label="Fechar Menu de Navegação"
          onClick={mobileNav.onClose}
        />

        {MENU_LINKS.map((props, index) => (
          <NavLink
            key={`${props}${index}`}
            label={props.label}
            path={props.path}
            title={props.title}
            onHandleClick={mobileNav.onClose}
          />
        ))}
      </VStack>
    </Box>
  )
}

export default memo(NavBarMobile)
