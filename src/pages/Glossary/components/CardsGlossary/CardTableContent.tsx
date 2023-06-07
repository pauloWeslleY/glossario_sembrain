import { memo } from 'react'
import { Flex, SimpleGrid } from '@chakra-ui/react'
import { NotesTypes } from '../../../../@types/NotesType'

interface CardTableContentProps {
  notes: NotesTypes
}

const CardTableContent = ({ notes }: CardTableContentProps) => {
  const { Dó, Fá, Lá, Mi, Notas, Pausa, Ré, Si, Sol } = notes
  const LIST_NOTES = [Notas, Dó, Ré, Mi, Fá, Sol, Lá, Si, Pausa]

  return (
    <SimpleGrid
      spacingY={3}
      columns={{ base: 1, md: 1 }}
      w={'full'}
      py={1}
      px={10}
      color={'zinc.600'}
      fontWeight={'medium'}
      fontFamily={'Poppins'}
    >
      {LIST_NOTES.map((notes, i) => (
        <Flex key={i} align={'center'} justify={'center'}>
          <span>{notes}</span>
        </Flex>
      ))}
    </SimpleGrid>
  )
}

export default memo(CardTableContent)
