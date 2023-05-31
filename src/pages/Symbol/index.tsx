import { Container, Flex, Heading, Text } from '@chakra-ui/react'
import { TableSymbols } from './components/TableSymbols'

export function Symbol() {
  return (
    <Container maxW={'8xl'}>
      <Flex mt={4}>
        <Heading fontFamily={'Poppins'} fontSize={'2xl'} color={'purple.700'}>
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

      <TableSymbols />

      <Text as={'small'} mb={2} color={'violet.400'}>
        Nas tabelas seguintes apresentamos as figuras rítmicas seguidas das
        notas e os respectivos pontos a serem preenchidos na célula braille.
      </Text>
    </Container>
  )
}
