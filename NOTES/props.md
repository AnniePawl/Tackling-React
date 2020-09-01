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