import React from 'react';
import { Input, Button } from 'antd'
import 'antd/dist/antd.css';


function InputComponent(props) {
  return (
    <div>
      <Input
        onChange={props.onChange}
        value={props.state.form.name}
        placeholder="Note Name"
        name="name"
        style={styles.input}
      />
      <Input
        onChange={props.onChange}
        value={props.state.form.description}
        placeholder="Note description"
        name="description"
        style={styles.input}
      />
      <Button
        onClick={props.createNote}
        type="primary"
      >Create Note</Button>
    </div>
  );
}


const styles = {
  input: { marginBottom: 10 },
}

export default InputComponent;
