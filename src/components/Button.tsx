import { Button, ButtonProps } from '@chakra-ui/react'

interface BtnProps extends ButtonProps {
  title: string
}

export function Btn({ title, ...rest }: BtnProps) {
  return (
    <Button
      {...rest}
      px={8}
      fontFamily={'Poppins'}
      fontWeight={'regular'}
      bg={'transparent'}
      borderColor={'transparent'}
      borderStyle={'solid'}
      borderWidth={'2px'}
      color={'zinc.100'}
      variant={'outline'}
      rounded={'md'}
      transition={'ease-out .3s'}
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'md',
        borderColor: 'violet.600',
        borderWidth: '2px',
        borderStyle: 'solid',
        color: 'violet.600',
      }}
    >
      {title}
    </Button>
  )
}
