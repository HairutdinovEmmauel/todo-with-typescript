import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Typing
import { ThunkDispatch } from 'redux-thunk';
import { rooReducerType } from '../../reducers';
import { TodosActionTypes, TodosStateI as MapStatePropsI } from '../../types/todos';

// Actions
import { requestTodos } from '../../actions';

interface MapDispatchPropsI {
    requestTodos: () => void,
} 

type TodosPropsType = MapStatePropsI & MapDispatchPropsI; 

const TodoList: React.FC<TodosPropsType> = ({ loading, todos, error, requestTodos }) => {

    useEffect(() => {
        requestTodos();
    }, [])

    if(loading) {
        return (
            <h1>Loading ...</h1>
        )
    }
    
    if(error) {
        return (
            <h1>{error}</h1>
        )
    }

    return (
        <div>
            <h1>TODO LIST</h1>
            <div>
                { todos.map(({ id, title }) => {
                    return (
                        <p key={id}>{title}</p>
                    )
                } ) }
            </div>
        </div>
    )
}

const mapStateToProps = ({ todos }: rooReducerType) => {
    return {
        loading: todos.loading,
        todos: todos.todos,
        error: todos.error,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<rooReducerType, unknown, TodosActionTypes>) => {
    return {
        requestTodos: () => dispatch( requestTodos() ),
    }
}


export default connect<MapStatePropsI, MapDispatchPropsI, {}, rooReducerType>(
    mapStateToProps, 
    mapDispatchToProps
)(TodoList);