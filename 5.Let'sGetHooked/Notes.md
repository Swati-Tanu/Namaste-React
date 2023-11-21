### Two types of Export/Import

1. Default Export/Import
export default variable_name;
import variable_name from "path";

2. Named Export/Import
export const variable_name;
import {variable_name} from "path";

When exporting two or more thing then only use Named Export/Import.

Fun question: Can we use a Default Export/Import along with Named Export/Import?
Answer: Yes

### React Hooks
It is a normal JS utility function given to us React (pre-built) and that functions has some logics already written to it. It is utility function given to us by React

#### 2 most important hooks are:
1. useState() - It gives superpowerful State Variable in React. Whenever a State Variable updates React re-renders the component.
2. useEffect()

#### React uses Reconciliation Algorithm (also known as React Fiber, came in React 16)

#### There are two types of DOM:
1. Actual DOM
2. Virtual DOM: It is a representation of an actual DOM. It is basically the object that we get when printing react element. So it is a normal JS Object. 

#### Diff Algorithm finds out the difference between previous virtual DOM and updated virtual DOM. 
It will calculate the difference and then update the DOM on every render cycle.

#### React Fiber is a new way of finding the diff and updating the virtual DOM.

React doesnot touch the actual DOM a lot that's one reason why it is fast. React is fast because it does efficent DOM manipulation as it has a virtual DOM (it is not a React concept, it existed long time ago) and using Diff Algo it makes the process efficient and fast.















