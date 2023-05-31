import { ReactNode, memo } from 'react'
import { Table } from '@chakra-ui/react'

const TableContainer = ({ children }: { children: ReactNode }) => (
  <Table
    w={'full'}
    my={8}
    display={{
      base: 'block',
      md: 'table',
    }}
    sx={{
      '@media print': {
        display: 'table',
      },
    }}
  >
    {children}
  </Table>
)

export default memo(TableContainer)
