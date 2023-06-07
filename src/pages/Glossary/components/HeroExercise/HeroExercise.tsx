import { memo } from 'react'
import { Flex, Text } from '@chakra-ui/react'

const HeroExercise = () => {
  return (
    <Flex as={'section'} flexDir={'column'} gap={2} my={4}>
      <Text
        as={'h3'}
        color={'violet.600'}
        fontWeight={'bold'}
        fontFamily={'Poppins'}
        fontSize={'lg'}
      >
        Exercício 1
      </Text>

      <Text
        color={'zinc.700'}
        fontFamily={'Poppins'}
        fontWeight={'medium'}
        letterSpacing={'wide'}
      >
        Escreva a melodia da primeira estrofe da música “O Cravo e a Rosa”, no
        tom de dó maior. A música iniciará com a nota sol. Desconsidere, por
        enquanto, fórmulas de compasso. Esse assunto veremos mais adiante.
      </Text>
    </Flex>
  )
}

export default memo(HeroExercise)
