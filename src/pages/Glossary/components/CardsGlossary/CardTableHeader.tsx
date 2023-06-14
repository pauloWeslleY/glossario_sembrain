import { memo } from 'react'
import { Flex, SimpleGrid } from '@chakra-ui/react'

const CardTableHeader = ({ head }: { head: Array<string> }) => (
  <SimpleGrid
    spacingY={3}
    columns={{ base: 1, md: 1 }}
    w={{ base: 320 }}
    textTransform={'uppercase'}
    bg={'violet.200'}
    color={'zinc.500'}
    py={{ base: 1 }}
    px={{ base: 2, md: 10 }}
    fontSize={['sm', 'md']}
    fontWeight={'semibold'}
    fontFamily={'Poppins'}
  >
    {head.map((head, index) => (
      <Flex key={index} align={'center'} justify={'center'}>
        <span>{head}</span>
      </Flex>
    ))}
  </SimpleGrid>
)

export default memo(CardTableHeader)
