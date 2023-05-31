import { ReactNode, memo } from 'react'
import { Td } from '@chakra-ui/react'

const TableRow = ({ children }: { children: ReactNode }) => (
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
      color: 'violet.800',
      fontSize: 'sm',
      fontWeight: 'bold',
      letterSpacing: 'wider',
      fontFamily: 'Poppins',
    }}
  >
    {children}
  </Td>
)

export default memo(TableRow)
