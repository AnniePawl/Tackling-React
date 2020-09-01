# Props (Properties)
In React, you can pass props, to child components. <br/>
Say  you have an App component that renders child component called, "Welcome", which is stateless functional component. Props is basically an argument in function body.  You can pass "Welcome" a "user" property like this:

```JSX
<App>
<Welcome user ='Anna'>
</App>
```

### Custom HTML Attributes 
Use custom HTML attributes created by you and supported by React to pass to componenet. 
```jsx
const Welcome = (props)=> <h1>Hello, {props.user} ! </h1>
```



### Example:

```jsx
const CurrentDate(props) => {
  return (
    <div>
     </p>The current date is: {props.date} <p/>
    </div>
  )
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
      <h3>What date is it?<h3/>
      <CurrentDate date ={Date()}/>
      <div/>
    )
  }
}
}
```

## Pass Array as Props
To pass array to JSX element, must be treated as JS and wrapped in curly braces. In example below, child component has access to array of colors. 

```jsx
const ChildComponent =(props) => {
  <p> {props.colors.join(',')}</p>
}
<ParentComponent>
  <ChildComponent colors={['green', 'blue', 'red']}>
<ParentComponent/>
```


### List and Tasks Example 
```jsx
const List(props) => {
  return(
    <div>
    <p> {props.tasks.join(",)}</p>
    </div>
  )

}

class ToDo extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div>
      <h2>Today's ToDos</h2>
      <List tasks={['walk dog','workout','read 5 chapters']}>
      </div>
    )
  }
}
```


## Default Props 
You can assign default props to a component as a property on component itself. React assigns default prop if necessary. In the example below, if you don't specify otherwise, location will be set to SF

```jsx
myComponent.defaultProps = { location:'SF'}
```
**Override Default Props** </br>
To override default props, expicitly set props values for a component 
```jsx
const Items = (props) => {
  return(
    <div>
    <h1>Items in Cart : {props.quantity}</h1>
    </div>
  )
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCard extends React.Componenet {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Items quantity={10}>
    )
  }
}
```


## Use PropTypes to Define Props you Expect
React provides type-checking features to verify that components received props of correct type. Best practice to ass propTypes when you known type ahead of time. Define in same way you define `defaultProps`. 
```jsx
MyComponent.propTypes = {handleClick:PropTypes.func.isRequired}
```
In the example above,`PropTypes.func` checks that `handleClick` is a function. </br>

*Don't forget to import propTypes!
`import PropTypes from 'prop-types`


## Access Props using `this.props`
When using an **ES6 class component** rather than stateless componnent, you use the `this` keyword preface to access props. 
For example, {props.data} would become `{this.props.data}`
