# Components

## Render Method
Render Method looks like this: ```render()``` <br>
It takes *input data* and *returns what to display*
<br>
<br>
**Input Data** can be accessed by ```render()``` via ```this.props```

### A Simple Example

```class HiMessage extends React.Component {
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
A component can also maintain **internal state data**
<br>
When component's state data changes, rendered markup will be updated by re-invoking ```render()```
<br>
State Data can be accessed via ```this.state```
<br>
Check out state-component.md for more


## An Application
Using `props`
