import { compose } from 'redux'

import TodoAdder from './todo-adder.component';
import TodoAdderContainer from './todo-adder.container';

export default compose (
    TodoAdderContainer
)(TodoAdder);