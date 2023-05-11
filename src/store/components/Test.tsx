import * as React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Heading, Modal, ModalOverlay, IconButton, Text, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, ModalBody, Button, useDisclosure, Textarea, Input, Spinner} from '@chakra-ui/react'
import {EditIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import TestPagination from './TextPagination';
import TestQuestion from './TestQuestion';
import { useGetQuestionsQuery } from '../api';

interface ITestProps {
}

const Test: React.FunctionComponent<ITestProps> = (props) => {

  const [isAnswerHidden, setIsHidden] = React.useState<boolean>(true)

  const [page, setPage] = React.useState<number>(Number(localStorage.getItem('test-page')) || 1)

  const {
    data,
    isFetching
  } = useGetQuestionsQuery({
    limit: 1,
    page,
    search: '',
    notAnswered: false
  }) 

  React.useEffect(() => {
    localStorage.setItem('test-page', page.toString())
  }, [page])

  return (
    <>
      {!isFetching && data && data.questions.map(q => <TestQuestion 
        isAnswerHidden={isAnswerHidden}
        correct={q.correct}
        id={q.id}
        question={q.question}
        variants={q.variants}
      />)}
      {isFetching && <div style={{width: '100%', display: 'flex', justifyContent: 'center', padding: '50px 0'}}>
        <Spinner/>
        </div>}
      <Button
        onClick={() => setIsHidden(prev => !prev)}
        marginBottom={'10px'}
      >{isAnswerHidden ? 'Показать ответ' : 'Скрыть ответ'}</Button>
      {data &&  <TestPagination
        page={page}
        setPage={setPage}
        maxPage={Math.ceil(data.total)}
        onNextClick={() => {
          setIsHidden(true)
          setPage(prev => prev + 1)
        }}
        onPrevClick={() => {
          setIsHidden(true)
          setPage(prev => prev - 1)
        }}
        nextDisablded={page === data.total}
        prevDisablded={page === 1}
      />}
    </>
  );
};

export default Test;
