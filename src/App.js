import { Route, Switch } from 'react-router-dom';
import Heading from './components/heading';
import TaskForm from './components/task-form';
import TaskList from './components/task-list';
import { ContextProvider } from './context/global-context';
import './App.css';

function App() {
  return (
    <div>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
        <ContextProvider>
        <Heading/>

        <Switch>
          <Route exact path='/' component={TaskList} />
          <Route path='/taskform' component={TaskForm} />
        </Switch>
        </ContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
