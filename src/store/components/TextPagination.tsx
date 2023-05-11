import * as React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Heading, Modal, ModalOverlay, IconButton, Text, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, ModalBody, Button, useDisclosure, Textarea, Input, Container, Select} from '@chakra-ui/react'
import {EditIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

interface ITestPaginationProps {
  page: number
  setPage: (page: number) => void
  onNextClick: () => void
  onPrevClick: () => void
  nextDisablded: boolean
  prevDisablded: boolean
  maxPage: number
}

const TestPagination: React.FunctionComponent<ITestPaginationProps> = ({
  page,
  onNextClick,
  onPrevClick,
  nextDisablded,
  prevDisablded,
  maxPage,
  setPage
}) => {

  const onChange = (e: any) => {
    setPage(Number(e.target.value))
  }

  let pagesArray = []
  for (let i = 0; i < maxPage; i++) {
    pagesArray.push(i+1)
  } 

  return (
    <Container display={'flex'} justifyContent={'center'} gap={5} alignItems={'center'} margin={'10px 0'}>
      <IconButton
        aria-label='Back'
        icon={<ArrowLeftIcon/>}
        onClick={onPrevClick}
        isDisabled={prevDisablded}
      />
      <Select placeholder='Select page' onChange={onChange}>
        {pagesArray.map(i => <option value={i} selected={i === page}>{i}</option>
        )}
      </Select>
      <IconButton
        aria-label='Next'
        icon={<ArrowRightIcon/>}
        onClick={onNextClick}
        isDisabled={nextDisablded}
      />
    </Container>
  );
};

export default TestPagination;
