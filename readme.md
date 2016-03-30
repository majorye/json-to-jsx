# json-to-jsx

Convert JSON Object to JSX. 

## Installation

	npm install json-to-jsx

## Usage

```javascript	
var json2jsx = require('json-to-jsx')
  , jsx = json2jsx({ 'componentName': 'Root' });

console.log(jsx);
```

output:

```html  
{
  <Root></Root>
}
```

2 space indentation is default. Change it by adding a numeric argument to `json2jsx`.

```javascript
var html = json2jsx(object, 4);
```
