# Components
Components are the core of React ! <br/>
Most React Apps have many small components that are all loaded into the main `app` component. Becuase JSX componenets represent HTML, you can put several componenets together to create a more complex HTML page. <br/>

A typical React componenet is an ES6 class that extends `React.Component`. It has a render method that returns HTML(from JSX) or null. 

**There are 2 Ways to Create a React Component:** 
1. Use a **JavaScript function**, which creates a **stateless functional component**.
2. Use **ES6 class** syntax.

## Stateless Functional Componennt 
Any function that accepts props and returns JSX

## Stateless Component 
 Think of this component as one that can receive data and render it, but does not manage or track changes to data. It's a class that extends `React.Component`, but does not use internal state. To create componenet with function, simply write a JS function that returns either JSX or null. Remember, React requires function name to start with capital letter. 

 ```jsx
 const MyComponenet = 
 function(){
   return(
    <div>
    <h1>My Function!</h1>
    </div>
   )
 }
 ```

 ### Pass Props to Stateless Functional Component 


## Render Method
Render Method looks like this: ```render()``` <br>
It takes *input data* and *returns what to display*
<br>
<br>
**Input Data** can be accessed by ```render()``` via ```this.props```

### A Simple Example

```jsx
class HiMessage extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        Hi {this.props.name}
      </div>
      );
  };
}

ReactDom.render(
  <HiMessage name="Anna"/>
  document.getElementById('hi-example')
  );
  ```
## Stateful Component
A component can also maintain **internal state data**. Try to minimize statefulness by using stateless functional components when possible. This helps cintain state management to specific area of app and improves development and maintenance of app by making it easier to follow how changes to state affect its behavior. 
<br>
When component's state data changes, rendered markup will be updated by re-invoking ```render()```
<br>
State Data can be accessed via ```this.state```
<br>
Check out state-component.md for more


## An Application
Using `props`
