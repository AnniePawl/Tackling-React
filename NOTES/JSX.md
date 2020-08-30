# JSX 
React uses a syntax extention of JavaSript called, **JSX** that allows you to write HTML directly within JS. JSX is very similar to HTML, but there are a few key differences. 
- JSX can be rendered directly to the HTML DOM

### Writing JS directly within JSX
JSX is sysntactic extension of JS. To write JS, you simply include code you want to be treated as JS in curlly braces. 
`{'this is treated as js'}`. ** Note that JSX is not actually valid JS... so it has to be *complied* first. 

- JSX can represent complex HTML
- ** Nested JSX must return a single element. JSX elemnts must have a parent wrapped element or will not transpile. Valid JSX:


```jsx 
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```

<!-- JSX Comments -->
### JSX Comments 
Look like this : `{/* */}`


### Differences between HTML and JSX:
- Everything is **camelCase**
- **className** instead of class
- **Self-closing tags** Any JSX element can be written with self-closing tag, specific use cases. 


