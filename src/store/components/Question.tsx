import * as React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Heading, Modal, ModalOverlay, IconButton, Text, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, ModalBody, Button, useDisclosure, Textarea, Input} from '@chakra-ui/react'
import {EditIcon } from '@chakra-ui/icons'
import QuestionEditModal from './QuestionEditModal';

interface IQuestionProps {
  question: string,
  variants: string | null | undefined, 
  id: number,
  correct: string | null | undefined,
  charter: number,
  order: number
}

const Question: React.FunctionComponent<IQuestionProps> = ({
  correct,
  id,
  question,
  variants,
  charter,
  order
}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const onClick = () => {
    const key = localStorage.getItem('key')
    if (!key) return alert('Отсутствует ключ доступа')
    onOpen()
  }

  return (
    <>
      <Card marginBottom={10} border={'1px'}>
        <CardHeader paddingBottom={0} display={'flex'}>
          <Heading size='md'>{id}. Глава {charter}. №{order}. {question}</Heading>
          <IconButton aria-label='Edit question' icon={<EditIcon />} onClick={onClick}/>
        </CardHeader>
        <CardFooter paddingTop={0} display={'flex'} flexDir={'column'}>
          <Text pt='2' fontSize='md' color={correct ? 'green.500' : 'red.600'}>
            {correct || 'Нет ответа'}
          </Text>
          <Text pt='2' fontSize='md' color={'gray.500'}>
            {variants || 'Нет вариантов'}
          </Text>
        </CardFooter>
      </Card>
      {isOpen && <QuestionEditModal
        correct={correct}
        id={id}
        isOpen={isOpen}
        onClose={onClose}
        question={question}
        variants={variants}
        charter={charter}
        order={order}
      />}
    </>
  );
};

export default Question;
