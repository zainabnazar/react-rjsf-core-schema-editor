
import './App.css';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import axios from 'axios';
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
  function onSubmit(response) {
    const jsonData = (response.schema);
    console.log('Data to send',jsonData)
    axios.post('http://localhost:3001/api/writeFile',jsonData)
      .then(jsonData => {
        console.log(jsonData);
      })
      .catch(err => {
        console.error('Error writing to file:', err);
      });
  }
  
function App() {
  return (
  
        <Form schema={schema} validator={validator} uiSchema={uiSchema}  onSubmit={response => onSubmit(response)}>
</Form>

  );
}

export default App;
