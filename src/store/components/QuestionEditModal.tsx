import * as React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Divider, Modal, ModalOverlay, IconButton, Text, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, ModalBody, Button, useDisclosure, Textarea, Input} from '@chakra-ui/react'
import { useEditQuestionByIdMutation } from '../api';

interface IQuestionModalProps {
  onClose: () => void,
  isOpen: boolean,
  question: string,
  variants: string | null | undefined, 
  id: number,
  correct: string | null | undefined, 
}

const QuestionEditModal: React.FunctionComponent<IQuestionModalProps> = ({
  isOpen,
  onClose,
  correct,
  id,
  question,
  variants
}) => {


  const [valueQuestion, setValueQuestion] = React.useState<string>(question)
  const [valueCorrect, setValueCorrect] = React.useState<string>(correct || '')
  const [valueVariants, setValueVariants] = React.useState<string | null>(variants || '')
  const handleQuestionChange = (event: any) => setValueQuestion(event.target.value)
  const handleCorrectChange = (event: any) => setValueCorrect(event.target.value?.lenght === 0 ? null : event.target.value)
  const handleVariantsChange = (event: any) => setValueVariants(event.target.value)

  const [update] = useEditQuestionByIdMutation()

  const save = async () => {
    const key = localStorage.getItem('key')
    if (!key) return alert('Нет ключа доступа!')
    try {
      await update({
        key,
        question: {
           correct: valueCorrect,
           id,
           question: valueQuestion,
           variants: valueVariants
        }
      }).unwrap()
    } catch (e: any) {
      if (e.status === 403) {
        alert('Ошибка с ключом доступа!')
      } else {
        alert("Неожиданная ошибка")
      }
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Редактирование вопроса</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text mb='8px'>Id {id}</Text>
          <Divider margin={'5px 0'}/>
          <Text mb='8px'>Вопрос</Text>
          <Textarea
            value={valueQuestion}
            onChange={handleQuestionChange}
            placeholder='Вопрос'
            size='sm'
          />
          <Divider margin={'5px 0'}/>
          <Text mb='8px'>Варианты</Text>
            <Textarea
              value={valueVariants || ''}
              onChange={handleVariantsChange}
              placeholder='Варианты'
              size='sm'
            />
            <Divider margin={'5px 0'}/>
            <Text mb='8px'>Ответ</Text>
            <Textarea
              value={valueCorrect}
              onChange={handleCorrectChange}
              placeholder='Ответ'
              size='sm'
            />
        </ModalBody>

        <ModalFooter>
          <Button variant='ghost' onClick={save}>Сохранить</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default QuestionEditModal;
