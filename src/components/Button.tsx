import { Button, ButtonProps } from '@chakra-ui/react'

interface BtnProps extends ButtonProps {
  title: string
  color?: string
}

export function Btn({ title, color, ...rest }: BtnProps) {
  return (
    <Button
      {...rest}
      px={8}
      fontFamily={'Poppins'}
      fontWeight={'semibold'}
      bg={'transparent'}
      borderColor={'transparent'}
      borderStyle={'solid'}
      borderWidth={'2px'}
      color={color}
      variant={'outline'}
      rounded={'md'}
      transition={'ease-out .3s'}
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
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
