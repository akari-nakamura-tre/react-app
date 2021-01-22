import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Button from '@/components/Buntton'
import Hello from '@/components/Hello'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact children={<Button />}></Route>
        <Route path="/hello" children={<Hello />}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
