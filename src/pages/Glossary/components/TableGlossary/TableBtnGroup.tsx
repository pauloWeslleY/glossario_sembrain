import { memo } from 'react'
import { ButtonGroup, IconButton, Td } from '@chakra-ui/react'
import { AiFillEdit } from 'react-icons/ai'
import { BsBoxArrowUpRight, BsFillTrashFill } from 'react-icons/bs'

function TableBtnGroup() {
  return (
    <Td>
      <ButtonGroup variant="solid" size="sm" spacing={3}>
        <IconButton
          colorScheme="blue"
          icon={<BsBoxArrowUpRight />}
          aria-label="Up"
        />
        <IconButton
          colorScheme="green"
          icon={<AiFillEdit />}
          aria-label="Edit"
        />
        <IconButton
          colorScheme="red"
          variant="outline"
          icon={<BsFillTrashFill />}
          aria-label="Delete"
        />
      </ButtonGroup>
    </Td>
  )
}

export default memo(TableBtnGroup)
