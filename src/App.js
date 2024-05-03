
import './App.css';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

const schema = require('./configs-schema.json')

const uiSchema= {
    "ui:options": {
        "semantic": {
          "fluid": true,
          "inverted": false,
          "errorOptions": {
            "size": "small",
            "pointing": "above"
          }
        }
      }
  };

function App() {
  return (
  
        <Form schema={schema} validator={validator} uiSchema={uiSchema}>
</Form>

  );
}

export default App;
