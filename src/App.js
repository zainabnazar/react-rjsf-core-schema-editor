
import './App.css';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import axios from 'axios';
const schema = require('./configs-schema.json')


const uiSchema= {
    "ui:options": {
      "addable": true,
      "orderable": true,
      "removable": true,
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
  function onSubmit({ formData }) {

    console.log('Data to send',formData )
    axios.post('http://localhost:3001/api/writeFile',formData)
      .then(formData => {
        console.log(formData);
      })
      .catch(err => {
        console.error('Error writing to file:', err);
      });
  }
  
function App() {
  return (
  
        <Form schema={schema} validator={validator} uiSchema={uiSchema}  onSubmit={onSubmit}>
</Form>

  );
}

export default App;
