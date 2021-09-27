import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { palettesById } from '../.';

const App = () => {
  return <pre>{JSON.stringify(palettesById, null, 2)}</pre>;
};

ReactDOM.render(<App />, document.getElementById('root'));
