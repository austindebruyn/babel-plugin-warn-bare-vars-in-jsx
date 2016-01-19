
# Install

`npm i --save babel-plugin-warn-bare-vars-in-jsx`

# Usage

Example .babelrc:
```js
{
  "plugins": [ "babel-plugin-warn-bare-vars-in-jsx" ],
  "presets": [ "react", "es2015" ]
}
```

Example index.js:
```js
  ...
  render: function () {
    let count = this.state.count;

    return <span>count</span>;
  }
  ...
```

In the render function above, the `count` variable is not enclosed with braces, and so will be treated as the bare text "count". This plugin will print a warning for each occurence.

```
$ babel index.js
Warning: A scoped variable was found as a JSX text literal. Did you mean
`<div>{count}</div>` instead of `<div>count</div>`?
```

# License

* MIT
