import { compose } from 'redux'

import ToDo from './todo-app.component';
import TodoAppContainer from './todo-app.container';

export default compose (
    TodoAppContainer
)(ToDo);