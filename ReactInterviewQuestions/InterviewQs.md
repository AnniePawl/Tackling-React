# React Interview Questions

## List of Resources

- https://github.com/sudheerj/reactjs-interview-questions
- https://www.fullstack.cafe/blog/react-js-interview-questions
- https://www.edureka.co/blog/interview-questions/react-interview-questions/
- https://tylermcginnis.com/react-interview-questions/
- https://www.codementor.io/blog/5-essential-reactjs-interview-questions-du1084ym1

### What is React?

- Frontend JS library developed by Facebook
- Used to developinng complex, resuable UI componenets

### Top React Features

- Virtual DOM instead of Real DOM
- Supports Server-side rendering
- Uni-directional data flow or data binding
- Uses reusable / composable UI componenets to develop view

### React Major Advantages

- Incease app preformance with virtual DOM
- JSX makes code easier to read and write
- Easy to integrate w/ other frameworks
- UI test cases more convenient

### React Limitations

- Just a view library, not full framework
- Very large library, learning curve

### What is JSX

JavaScript XML shorthand. Convenient and readable. Expressiveness of JS with HTML like template syntax.

### Real DOM vs. Virtual DOM vs. Shadow DOM

- Real DOM: Updates slowly, can directly update HTML, Creates new DOM if element updates, DOM manipulation expensive, memory wastage
- Virual DOM: Quicker updates, can't directly update HTML, Updates JSX if element updates,
  easy DOM manipulation, no memory wastage.
- Shadow DOM: Browser tech designed primarily for scoping variables and CSS in web components.

### What is Virtual DOM?

In memory representation of real DOM. (Document Object Mode). Process called reconciliation.

- Lightweight JS object

### What are Components

Building blocks of React UI. Splits into independent and resuable pieces. Renders each independently.

### render()

Components Must have render()

### Class Component vs. Functional Component

CC: additional features (local state, lifestyle hooks)

- Store info about component's state change in memory
- Has authority to change state
- Stateless components notifty them about requirement of stae change, then sned down props
  FC (presentational component)

  ```javaScript
  class  Greeting extends React.Component {
    render()  {
      return <h1>{`Hello, ${message}`}</h1>
    }
  }
  ```

- Stateless
- Cannot change state
- Contains no knowledge of past
- Contains no knowledge of past, current or possible future state changes
- Recieve props from stateful components and treat them as callback functions

```javaScript
function Greeting({ message }) {
  return <h1>{`Hello, ${message}`}</h1>;
}
```

### Refs

An attribute which helps store reference to particular React element or component. Used to return reference to particular element or component returned by `render()`<br>
Usually avoided?
**When to use Refts:**

- Manage focus, select text, media playback
- Trigger imerpative animations
- Itegrate w/ third part DOM elements

### Modularize React

Import and export properties.

Escape hatch, get direct access to DOM element or intense of component .

### How are Events Handled ?

Events are triggered reactions to specific actions like: mouse hover, click, keypress, etc.

- Event arguments contains set of props

```javaScript
class Dispaly extends React.Component( {
  show(evt) {
    //code
  },
  render() {
    return {
      <div onClick = {this.show}> Click Me!</div>
    }
  }
})
```

Helps solve cross browser compatibility issues.

### Synthetic Events

Cross-browser wrapper around browser's native event.

### State vs. Props

Both plain JS objects, hold info, but different in functionality with respect too component.<br>

- Props: passed to component similar to function paramers. Read-only components which much be kept pure(immutable). Always passed from parent to child. Child component can never send prop back to parent(maintains unidirectional data flow)
- Pass custom data to your component
- Trigger state changes
- Use via `this.props.reactProp` inside `render()` method

* State managed within component similar to variables declared within function. Objects which determine components rendering and behavior. Mutable, create dynamic and interactive components.
* State holds info that may change over lifetime of component.
* State similar to props but fully controlled by componen. Not accessibe to any other component other than one that owns and sets it

### Lifting State

### How do you upd

ate state?

`this.setState()`

### Whare are higher order components (HOC)?

Takes component and returns new component. Calle "pure components" b/c can accept any dynamically provided c hild component, but will not modify or copy behavior from input components.

## Why Use Super Component?

## What are Controlled Components?

Controls input elements within forms on subsequent user input. Every state mutation will have associated handler function.

- Do not maintain their own state
- Data controlled by parent component
- Take in current vaues thru props, notify changes cia callbacks

```javaScript
handleChange(event ){
  this.setState({value: event.target.value.toUpperCase()})
}
```

## What are Different ReactJS Phases?

- Initialization
- Mounting
- Updating
- Unmounting

**Initialization:**<br>

- `getInitialState()`
- `componentWillMount()`
- `componentDidMount()`

## Lifecycle Methods

## Advantages of Using React Hooks

Let you use state w/o writing a class. Allow you to resue stateful logic without changing your component hierarchy. Easy to share hooks among components

## useState()

Built-in React hook.

## StrictMode

Helper component. Varifies use of recommended practices. Console warnnings.

## What is prop drilling?

### Flux

Architechtual pattern

### Redux

Frontend lirary

## React Router

Helps w/ adding new screens and flows. Defines multiple routes.
