import { memo } from 'react'
import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

import Banner from '../../../assets/banner_braile.jpg'

function Hero() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'violet.600',
                zIndex: -1,
              }}
            >
              Glossário
            </Text>
            <br />{' '}
            <Text color={'violet.600'} as={'span'}>
              Musicografia Braille
            </Text>{' '}
          </Heading>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={'Login Image'} objectFit={'cover'} src={Banner} />
      </Flex>
    </Stack>
  )
}

export default memo(Hero)
