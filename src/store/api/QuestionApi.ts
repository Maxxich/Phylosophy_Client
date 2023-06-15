import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Options {
  limit?: number, 
  page?: number, 
  search?: string,
  notAnswered?: boolean
}

interface IQuestion{
  question: string
  variants: string | null | undefined
  correct: string | null | undefined
  id: number
  charter: number
  order: number
}

interface UpdateQuestionDto{
  key: string
  question: IQuestion
}

interface getQuestions{
  questions: IQuestion[]
  total: number
  
}

interface IQuestionNoId{
  question: string
  variants: string | null
  correct: string
  charter: number
  order: number
}

interface CreateQuestionDto{
  key: string
  questions: IQuestionNoId[]
}


export const QuestionApi = createApi({
  reducerPath: 'QuestionApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SERVER_URL }),
  tagTypes: ['Question'],
  endpoints: (builder) => ({
    getQuestions: builder.query<getQuestions, Options>({
      query: ({limit, page, search, notAnswered}) => `/question?limit=${limit}&page=${page}&search=${search}&not-answered=${Boolean(notAnswered)}`,
      providesTags: (result, error, arg) => 
        result
          ? [...result.questions.map(({ id }) => ({ type: 'Question', id: Number(id)})) as any]
          : ['Question']
    }),
    editQuestionById: builder.mutation<void, UpdateQuestionDto>({
      query: (body) => ({
        url: `/question`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Question']
    }),
    postQuestions: builder.mutation<void, CreateQuestionDto>({
      query: (body) => ({
        url: `/question`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Question']
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useEditQuestionByIdMutation,
  useGetQuestionsQuery,
  usePostQuestionsMutation
} = QuestionApi