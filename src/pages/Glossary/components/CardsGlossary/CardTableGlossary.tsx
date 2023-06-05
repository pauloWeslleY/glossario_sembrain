import { memo } from 'react'
import { Flex, Stack } from '@chakra-ui/react'
import { CardTableContent } from './index'

import { NOTES } from './repositories/notes'

const CardTableGlossary = () => {
  return (
    <Stack direction={{ base: 'column' }} my={5}>
      {NOTES.map((props, index) => (
        <Flex
          key={index}
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
