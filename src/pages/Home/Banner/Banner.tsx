import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Btn } from '../../../components/Button'

interface BannerProps {
  title: string
  subtitle: string
  coverUrl: string
}

const Banner = ({ title, subtitle, coverUrl }: BannerProps) => {
  const navigate = useNavigate()
  const shadowText = '2px 2px 2px #d8b4fe'

  return (
    <Box
      as={'header'}
      w={'full'}
      backgroundImage={`url(${coverUrl})`}
      bgPos={'center'}
      bgSize={'cover'}
      sx={{
        height: 'calc(100vh - 72px)',
      }}
    >
      <Flex
        as={'section'}
        align={'center'}
        pos={'relative'}
        justify={'center'}
        boxSize={'full'}
        bg={'whiteAlpha.400'}
      >
        <Stack textAlign={'center'} alignItems={'center'} spacing={10}>
          <Stack w={'full'} maxW={'lg'}>
            <Heading
              fontFamily={'Poppins'}
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            >
              <Text
                as={'span'}
                position={'relative'}
                color={'violet.600'}
                textShadow={shadowText}
                letterSpacing={'tighter'}
                zIndex={1}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '25%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'zinc.700',
                  zIndex: -1,
                }}
              >
                {title}
              </Text>
              <br />{' '}
              <Text
                as={'span'}
                color={'violet.600'}
                textShadow={shadowText}
                letterSpacing={'wide'}
              >
                {subtitle}
              </Text>{' '}
            </Heading>
          </Stack>
          <Btn
            title="Glossário"
            color="zinc.800"
            aria-label="Link que direciona para a pagina contendo o conteúdo do Glossário."
            onClick={() => navigate('/glossary')}
          />
        </Stack>
      </Flex>
    </Box>
  )
}

export default memo(Banner)
