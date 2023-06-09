import { Container, Flex, HStack, Heading, Text } from '@chakra-ui/react'
import { CardTableGlossary } from './components/CardsGlossary'
import { HeroExercise } from './components/HeroExercise'

export function Glossary() {
  return (
    <Container as={'main'} maxW={'8xl'}>
      <HStack my={2}>
        <Text
          color={'violet.400'}
          fontWeight={'semibold'}
          textTransform={'uppercase'}
        >
          Módulo 1
        </Text>
      </HStack>

      <Flex as={'header'} mt={4}>
        <Heading
          as={'h2'}
          fontFamily={'Poppins'}
          fontSize={'2xl'}
          color={'zinc.700'}
        >
          Símbolos básicos:{' '}
          <Text as={'span'} fontSize={'xl'}>
            notas e pausas.
          </Text>
        </Heading>
      </Flex>
      <Text my={4} fontSize={'Poppins'} color={'violet.400'}>
        Nas tabelas seguintes apresentamos as figuras rítmicas seguidas das
        notas e os respectivos pontos a serem preenchidos na célula braille.
      </Text>

      <Container maxW={'3xl'}>
        <CardTableGlossary />
      </Container>

      <HeroExercise />

      <Text as={'footer'} mb={2} color={'violet.400'}>
        <small>
          Fonte: Manual Internacional de Musicografia Braille. Ministério da
          Educação - Secretaria de Educação Especial.
        </small>
      </Text>
    </Container>
  )
}
