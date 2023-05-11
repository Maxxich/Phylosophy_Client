import { EditIcon } from '@chakra-ui/icons';
import { Card, CardBody, CardFooter, CardHeader, Heading, IconButton, Text } from '@chakra-ui/react';
import * as React from 'react';

interface ITestQuestionProps {
  question: string,
  variants: string | null | undefined, 
  id: number,
  correct: string | null | undefined
  isAnswerHidden: boolean
}

const TestQuestion: React.FunctionComponent<ITestQuestionProps> = ({
  correct,
  id,
  question,
  variants,
  isAnswerHidden
}) => {



  return (
    <Card marginBottom={10} border={'1px'} minHeight={'40vh'}>
      <CardHeader paddingBottom={0} display={'flex'}>
        <Heading size='md'>{id}. {question}</Heading>
      </CardHeader>

      <CardBody paddingTop={0} paddingBottom={0}>
        <Text pt='2' fontSize='md'>
          {variants}
        </Text>
      </CardBody>
      {!isAnswerHidden &&  
        <CardFooter paddingTop={0}>
          <Text pt='2' fontSize='md' color={correct ? 'green.600' : 'red.700'}>
            {correct || 'Нет ответа'}
          </Text>
        </CardFooter>
      }
    </Card>
  );
};

export default TestQuestion;
