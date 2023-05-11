import * as React from 'react';
import Question from '../components/Question';
import { Layout } from '../Layout';
import KeyInput from '../components/KeyInput';
import { Checkbox, Divider, Spinner } from '@chakra-ui/react';
import Search from '../components/Search';
import TestPagination from '../components/TextPagination';
import { useGetQuestionsQuery } from '../api';

interface IAllQuestionsProps {
}

const AllQuestions: React.FunctionComponent<IAllQuestionsProps> = (props) => {
  const limit = 20

  const [page, setPage] = React.useState<number>(1)
  const [search, setSearch] = React.useState<string>('')
  const [notAnswered, setNotAnswered] = React.useState<boolean>(false)

  const {
    data,
    isFetching
  } = useGetQuestionsQuery({
    limit,
    page,
    search,
    notAnswered,
  }) 

  

  return (
    <Layout>
      <Search
        searchValue={search}
        setSearchValue={(e: any) => {setSearch(e)
          setPage(1)
        }}
      />
      <Checkbox
        onChange={(e) => setNotAnswered(e.target.checked)}
        margin={'10px'}
      >Показать вопросы без ответов</Checkbox>
      
      {data && 
         <TestPagination
          page={page}
          setPage={setPage}
          maxPage={Math.ceil(data.total/limit)}
          onNextClick={() => {
            setPage((prev) => prev + 1 )
          }}
          onPrevClick={() => {
            setPage((prev) => prev -1 )
          }}
          nextDisablded={page === Math.ceil(data.total/limit)}
          prevDisablded={page === 1}
        />
      }
      {!isFetching && data && data.questions.map(q => <Question
        correct={q.correct}
        id={q.id}
        question={q.question}
        variants={q.variants}
        key={q.id}
      />)}
      {isFetching && <div style={{width: '100%', display: 'flex', justifyContent: 'center', padding: '50px 0'}}>
        <Spinner/>
        </div>}
      {data && 
         <TestPagination
          page={page}
          setPage={setPage}
          maxPage={Math.ceil(data.total/limit)}
          onNextClick={() => {
            setPage((prev) => prev + 1 )
          }}
          onPrevClick={() => {
            setPage((prev) => prev -1 )
          }}
          nextDisablded={page === Math.ceil(data.total/limit)}
          prevDisablded={page === 1}
        />
      }
    </Layout>
  );
};

export default AllQuestions;
