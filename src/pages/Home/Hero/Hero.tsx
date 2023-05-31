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

interface HeroProps {
  title: string
  subtitle: string
}

function Hero({ title, subtitle }: HeroProps) {
  return (
    <Stack minH={'92vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading
            fontFamily={'Poppins'}
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              color={'zinc.700'}
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
              {title}
            </Text>
            <br />{' '}
            <Text color={'violet.600'} as={'span'}>
              {subtitle}
            </Text>{' '}
          </Heading>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={'Banner do Glossário'} src={Banner} fit={'cover'} />
      </Flex>
    </Stack>
  )
}

export default memo(Hero)
