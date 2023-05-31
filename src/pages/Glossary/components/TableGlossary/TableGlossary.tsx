import React, { ReactNode, memo } from 'react'
import { Td } from '@chakra-ui/react'
import {
  TableHeaderGlossary,
  TableContainer,
  TableBodyGlossary,
  TableRowGlossary,
  TableRow,
} from './index'
import { DATA } from './data/notes'

const TableGlossary = () => {
  const TableCell = ({ children }: { children: ReactNode }) => (
    <Td
      color={'zinc.950'}
      fontFamily={'Poppins'}
      fontWeight={'regular'}
      fontSize={'md'}
    >
      {children}
    </Td>
  )

  return (
    <TableContainer>
      <TableHeaderGlossary />
      <TableBodyGlossary>
        {DATA.map((data, index) => {
          return (
            <TableRowGlossary key={index}>
              {Object.keys(data).map((props: string) => {
                return (
                  <React.Fragment key={`${index}${props}`}>
                    <TableRow>{props}</TableRow>
                    <TableCell>{data[props]}</TableCell>
                  </React.Fragment>
                )
              })}
            </TableRowGlossary>
          )
        })}
      </TableBodyGlossary>
    </TableContainer>
  )
}

export default memo(TableGlossary)
