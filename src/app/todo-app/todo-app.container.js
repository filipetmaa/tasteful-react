import { connect } from 'react-redux';

import { actions } from '@state';

const mapStateToProps = (state, ownProps) => ({
    todoList: state.todoList,
});

const mapDispatchToProps = {
    addTodo: actions.todoListActions.AddTodo,
    toggleTodo: actions.todoListActions.ToggleTodo
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
);