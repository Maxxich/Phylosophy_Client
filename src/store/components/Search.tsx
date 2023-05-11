import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import * as React from 'react';

interface ISearchProps {
  searchValue: string
  setSearchValue: (event: any) => void 
}

const Search: React.FunctionComponent<ISearchProps> = ({
  searchValue,
  setSearchValue,
}) => {

  const handleChange = (event: any) => setSearchValue(event.target.value)

  return (
    <InputGroup size='sm'>
      <InputLeftAddon children={<SearchIcon/>} />
      <Input placeholder='Поиск...' 
              value={searchValue}
              onChange={handleChange}
      />
    </InputGroup>
  );
};

export default Search;
