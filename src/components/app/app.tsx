import React from 'react';

// Customer Component
import UserList from '../user-list';
import TodoList from '../todo-list';

const App: React.FC = () => {
    return (
        <div>
            <UserList />
            <TodoList />
        </div>
    )
}

export default App;