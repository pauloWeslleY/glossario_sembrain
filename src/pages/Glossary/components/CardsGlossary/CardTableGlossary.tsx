import { memo } from 'react'
import { Flex, Stack } from '@chakra-ui/react'
import { CardTableContent, CardTableHeader } from './index'

import { NOTES } from './repositories/notes'
import HEAD from './repositories/header'

const CardTableGlossary = () => {
  return (
    <Stack as={'article'} direction={{ base: 'column' }} my={5}>
      {NOTES.map((props, index) => (
        <Flex
          key={index}
          as={'section'}
          direction={{ base: 'row' }}
          bg={'purple.200'}
          rounded={'md'}
          shadow={'lg'}
        >
          <CardTableHeader head={HEAD} />
          <CardTableContent notes={props} />
        </Flex>
      ))}
    </Stack>
  )
}

export default memo(CardTableGlossary)
