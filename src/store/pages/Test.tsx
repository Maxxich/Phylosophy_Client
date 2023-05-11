import * as React from 'react';
import TestC from '../components/Test'
import { Layout } from '../Layout';

interface ITestProps {
}

const Test: React.FunctionComponent<ITestProps> = (props) => {
  return (
    <Layout>
      <TestC/>
    </Layout>
  );
};

export default Test;
