# State 
State consists of any data your app needs to know about, that can change over time. You want your apps to respond to state changes and present an updated UI when necessary. </br>
React uses **virtual DOM** to keep track of changes behind the scenes. When state data updates, it triggers a re-render of components using data. React only updates actual DOM when necessary.</br>
State is completely **encapsulated,** meaning it is local to that componenet untill you pass state data to child component as props. 

To create state in React, delcare a `state` property on component class in **constructor**. Must create **class component** by extending React.Component to use state. This will initialize state when component is created. state property must be set to JS object
```jsx
this.state = {
  //describe state here
  name:"Anna"
}
```
Use `{this.state.name}` to render the value of name in render method

You have access to state object throughout component life cycle. You can :
- Update it
- Render it to UI
- Pass it as props to child componenets

## this.setState()
React provides a method for updating component state with `setState`. You can call this within component class `this.setState()`, passing in object w/ key-value pairs. React expects you to never modify state directly. Updates througgh setState can be asynchronou. 
- Keys are state properties 
- Values are updated state data 

## Bind 'this' to Class Method
Class method usually needs `this` keybowrd to access properties on class (like state and props) inside scope of method. 
- You can explicitly bind `this` in constructor so `this` becomes bound to  class method swhen componen tis initialized. 
```jsx
   this.handleClick=this.handleClick.bind(this)
```

## Toggle Element
What happens if we need to know previous state when updating state? Since state updates may be asynchronous, React might batch mulitple setState() calls into single update-- so we can't rely on previous value of `this.state` or `this.props`. </br>
Pass `setState` a function that allows access to state and props. Guarantees you are working w/ most current values on state and props. 

```jsx
this.setState((state,props) => ({
  counter: state.counter + props.increment
}))
```