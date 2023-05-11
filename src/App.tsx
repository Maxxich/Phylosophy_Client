import {Provider} from 'react-redux'
import { store } from './store';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider, createBrowserRouter, BrowserRouter } from 'react-router-dom';
import { Layout } from './store/Layout';
import AllQuestions from './store/pages/AllQuestions';
import Test from './store/pages/Test';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllQuestions />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);


function App() {
  return (
    <Provider
      store={store}
    >     
      <ChakraProvider>
          
            <RouterProvider
              router={router}
            />

      </ChakraProvider>
    </Provider>
  );
}

export default App;
