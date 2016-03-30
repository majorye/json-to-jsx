
var jsx = require('./');

var obj1 = {
  "componentName": "Root",
  "props": {
     "label":'root',
     placeholder:'请输入',
     defaultValue:{
        value:'12222'
     },
     require:true,
     validation:'email',
     zhouquan:'sss'
  },
  "children": [
    {
      "componentName": "NumberField",
      "componentId": "IMBBPD1B",
      children:[
        {
          "componentName": "A",
          children:[
            {
              componentName:'C'
            }
          ]
        },
        {
          "componentName": "B"
        }
      ]
    },
    {
      "componentName": "NumberField2",
      "componentId": "IMBBPD1B"
    }
  ]
};

console.log('<pre>' + jsx(obj1) + '</pre>');
