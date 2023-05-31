import { ReactNode, memo } from 'react'
import { Tbody } from '@chakra-ui/react'

function TableBodySymbols({ children }: { children: ReactNode }) {
  return (
    <Tbody
      display={{
        base: 'block',
        lg: 'table-row-group',
      }}
      sx={{
        '@media print': {
          display: 'table-row-group',
        },
      }}
    >
      {children}
    </Tbody>
  )
}

export default memo(TableBodySymbols)
