import { memo } from 'react'
import { Flex, Stack } from '@chakra-ui/react'
import { CardTableContent } from './index'

import { NOTES } from './repositories/notes'

const CardTableGlossary = () => {
  return (
    <Stack as={'article'} direction={{ base: 'column' }} my={5}>
      {NOTES.map((props, index) => (
        <Flex
          key={index}
          as={'section'}
          direction={{ base: 'row', md: 'column' }}
          bg={'purple.200'}
          rounded={'md'}
          shadow={'lg'}
        >
          <CardTableContent notes={props} />
        </Flex>
      ))}
    </Stack>
  )
}

export default memo(CardTableGlossary)
