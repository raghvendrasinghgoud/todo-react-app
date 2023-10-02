import './App.css';
import { Container } from 'react-bootstrap';
import AddTodo from './components/AddTodo';
import DisplayTodo from './components/DisplayTodo'
import { Provider } from 'react-redux';
import store from './Redux/reducers/store';

function App() {
  const handleUpdate=(upTodo)=>{
    return upTodo;
  }
  return (
    <Provider store={store}>
    <Container>
      <AddTodo />
      <DisplayTodo />
    </Container>
    </Provider>
  );
}

export default App;
