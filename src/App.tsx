import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Hello from '@/components/Hello'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact children={<Hello />}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
