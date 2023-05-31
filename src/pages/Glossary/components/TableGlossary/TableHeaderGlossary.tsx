import { memo } from 'react'
import { Th, Thead, Tr } from '@chakra-ui/react'

function TableHeaderGlossary() {
  const HEADER_TABLE: Array<string> = [
    'Notas',
    'Dó',
    'Ré',
    'Mi',
    'Fá',
    'Sol',
    'Lá',
    'Si',
    'Pausa',
  ]

  return (
    <Thead
      display={{
        base: 'none',
        md: 'table-header-group',
      }}
      sx={{
        '@media print': {
          display: 'table-header-group',
        },
      }}
    >
      <Tr>
        {HEADER_TABLE.map((props, index) => (
          <Th
            key={`${index}${props}`}
            fontSize={'md'}
            fontWeight={'bold'}
            color={'purple.700'}
          >
            {props}
          </Th>
        ))}
      </Tr>
    </Thead>
  )
}

export default memo(TableHeaderGlossary)
