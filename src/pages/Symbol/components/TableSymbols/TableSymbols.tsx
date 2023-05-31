import React, { ReactNode, memo } from 'react'
import { Td } from '@chakra-ui/react'
import {
  TableHeaderSymbols,
  TableContainer,
  TableBodySymbols,
  TableRowSymbols,
  TableRow,
} from './index'

const TableSymbols = () => {
  const DATA: Array<any> = [
    {
      Notas: 'Semibreves e semicolcheias',
      Dó: '13456',
      Ré: '1356',
      Mi: '12346',
      Fá: '123456',
      Sol: '12356',
      Lá: '2346',
      Si: '23456',
      Pausa: '134',
    },
    {
      Notas: 'Mínimas e fusas',
      Dó: '1345',
      Ré: '135',
      Mi: '1234',
      Fá: '12345',
      Sol: '1235',
      Lá: '234',
      Si: '2345',
      Pausa: '136',
    },
    {
      Notas: 'Semínimas e semifusas',
      Dó: '1456',
      Ré: '156',
      Mi: '1246',
      Fá: '12456',
      Sol: '1256',
      Lá: '246',
      Si: '2456',
      Pausa: '1236',
    },
    {
      Notas: 'Colcheias e quartifusas',
      Dó: '145',
      Ré: '15',
      Mi: '124',
      Fá: '1245',
      Sol: '125',
      Lá: '24',
      Si: '245',
      Pausa: '1346',
    },
  ]

  const TableCell = ({ children }: { children: ReactNode }) => (
    <Td
      color={'violet.200'}
      fontFamily={'Poppins'}
      fontSize={'md'}
      fontWeight={'light'}
    >
      {children}
    </Td>
  )

  return (
    <TableContainer>
      <TableHeaderSymbols />
      <TableBodySymbols>
        {DATA.map((data, index) => {
          return (
            <TableRowSymbols key={index}>
              {Object.keys(data).map((props: string) => {
                return (
                  <React.Fragment key={`${index}${props}`}>
                    <TableRow>{props}</TableRow>
                    <TableCell>{data[props]}</TableCell>
                  </React.Fragment>
                )
              })}
            </TableRowSymbols>
          )
        })}
      </TableBodySymbols>
    </TableContainer>
  )
}

export default memo(TableSymbols)
