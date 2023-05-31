import { memo } from 'react'
import { Td, useColorModeValue } from '@chakra-ui/react'

function TableHead() {
  const color2 = useColorModeValue('gray.400', 'gray.400')
  return (
    <Td
      display={{
        base: 'table-cell',
        md: 'none',
      }}
      sx={{
        '@media print': {
          display: 'none',
        },
        textTransform: 'uppercase',
        color: color2,
        fontSize: 'xs',
        fontWeight: 'bold',
        letterSpacing: 'wider',
        fontFamily: 'heading',
      }}
    >
      Actions
    </Td>
  )
}

export default memo(TableHead)
