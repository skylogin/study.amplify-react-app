import React from 'react';
import Button from '../common/Button';
import { styles } from './Form';

function ForgotPasswordSubmit(props){
    return (
        <div style={styles.container}>
            <input
                name='confirmationCode'
                placeholder='confirmation code'
                onChange={e => {e.persist(); props.updateFormState(e)}}
                style={styles.input}
            />
            <input
                name='password'
                placeholder='new password'
                type='password'
                onChange={e => {e.persist(); props.updateFormState(e)}}
                style={styles.input}
            />
            <Button onClick={props.forgotPasswordSubmit} title="Save new password" />
        </div>
    )
}

export default ForgotPasswordSubmit;