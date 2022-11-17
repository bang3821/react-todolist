import React from 'react';
import TodoListTemplate from './components/js/TodoListTemplate';

class App extends React.Component {
  render() {
    return(
      <TodoListTemplate>
        오늘 할 일 템플릿입니다.
      </TodoListTemplate>
    );
  }
}

export default App;
