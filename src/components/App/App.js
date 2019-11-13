import React, { useState, useRef, useEffect } from 'react';
import nextId from "react-id-generator";
import Layout from '../Layout';
import TodoList from '../TodoList';
import Button from '../Button';
import showDeleteConfirm from '../ShowDeleteConfirm';

const initialTodos = [
    {
        id: nextId('todo'),
        title: 'first todo',
        selected: true,
        editing: false,
        error: null,
    },
];

const createNewTodo = () => ({
    id: nextId('todo'),
    title: '',
    selected: false,
    editing: true,
    error: null,
});

const App = () => {

    const [todos, setTodos] = useState(initialTodos);

    const textInputRef = useRef(null);

    const addNewTodo = () => {
        const newTodo = createNewTodo();
        setTodos([...todos, {...newTodo}]);
    };

    const deleteTodo = todoId => {
        const newTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(newTodos);
    };

    const toggleTodoSelected = todoId => {
        const newTodos = todos.map(todo => todo.id === todoId ? {...todo, selected: !todo.selected} : todo);
        setTodos(newTodos);
    };

    const toggleTodoEditing = todoId => {
        const newTodos = todos.map(todo => todo.id === todoId ? {...todo, editing: !todo.editing} : todo);
        setTodos(newTodos);
    };

    const setTodoError = (todoId, error) => {
        const newTodos = todos.map(todo => (
            todo.id === todoId
                ? {...todo, error}
                : todo
        ));
        setTodos(newTodos);
    };

    const todoBeingEdited = todos.find(todo => todo.editing === true); // todo-object or undefined

    const findTodoWithSameTitle = str => {
        return todos.find(todo => todo.title.toLowerCase() === str.toLowerCase()); // todo-object or undefined
    };

    const onInputTextBlur = todo => {
        if (todo.title) {
            toggleTodoEditing(todo.id);
        } else {
            textInputRef.current.focus();
            setTodoError(todo.id, {message: 'Please enter new todo title'});
        }
    };

    const onBtnEditClick = todoId => {
        if (!todoBeingEdited) {
            toggleTodoEditing(todoId);
        }
    };

    const onInputTextOnChange = todoId => {
        setTodoError(todoId, null);
    };

    const onInputTextSubmit = todoId => (submittedValue = '') => {
        if (submittedValue.length === 0) {
            setTodoError(todoId, {message: 'Cannot submit an empty value!'});
        } else if (findTodoWithSameTitle(submittedValue)) {
            setTodoError(todoId, {message: 'This Todo already exists!'});
        } else {
            const newTodos = todos.map(todo => (
                todo.id === todoId
                    ? {...todo, editing: false, title: submittedValue}
                    : todo
            ));
            setTodos(newTodos);
        }
    };

    const onBtnNewItemClick = () => {
        if (!todoBeingEdited) {
            addNewTodo();
        }
    };

    useEffect(() => {
        if (textInputRef && textInputRef.current) {
            textInputRef.current.focus();
        }
    }, [todos]);

    return (
        <div>
            <Layout>
                <TodoList
                    todos={todos}
                    ref={textInputRef}
                    onBtnSelectionClick={toggleTodoSelected}
                    onBtnEditClick={onBtnEditClick}
                    onBtnDeleteClick={deleteTodo}
                    onInputTextBlur={onInputTextBlur}
                    onInputTextOnChange={onInputTextOnChange}
                    onInputTextSubmit={onInputTextSubmit}
                />
                <Button
                    onClick={onBtnNewItemClick}
                >
                    New Item
                </Button>
            </Layout>
        </div>
    );
};

export default App;