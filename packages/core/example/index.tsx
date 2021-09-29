import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getPalettes } from '../.';

const App = () => {
  return <pre>{JSON.stringify(getPalettes(), null, 2)}</pre>;
};

ReactDOM.render(<App />, document.getElementById('root'));
