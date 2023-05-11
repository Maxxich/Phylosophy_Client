import { CheckIcon } from '@chakra-ui/icons';
import { Container, Input, Text, Textarea } from '@chakra-ui/react';
import * as React from 'react';

interface IKeyInputProps {
}

const KeyInput: React.FunctionComponent<IKeyInputProps> = (props) => {

  const [value, setValue] = React.useState<string>(localStorage.getItem('key') || '')
  const handleChange = (event: any) => setValue(event.target.value)

  React.useEffect(() => {
    localStorage.setItem('key', value)
  }, [value])


  return (
    <>
      <Text fontSize={'16px'}>Ключ</Text>
      <Input
        value={value}
        onChange={handleChange}
        placeholder='Ключ'
        size='sm'
        type='password'
      />
    </>
  );
};

export default KeyInput;
