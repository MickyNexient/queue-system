import { useReducer } from 'react';

import StaticInput from '../../../components/StaticInput';
import styles from './FormOne.module.css';
import reducer, { initialState, types } from './../../../reducers/FormOneReducer'

export default function FormOne({ handleNewQueue }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.info("FORM SUBMIT", state);
        handleNewQueue(state);
    }

    return (
        <div className={styles.formOne}>
            <form>
                <StaticInput
                    props={{ name: 'Email', field: 'email' }}
                    handleChange={(e) => dispatch({ type: types.UPDATE, field: e.field, value: e.value })}
                />
                <StaticInput
                    props={{ name: 'First Name', field: 'firstName' }}
                    handleChange={(e) => dispatch({ type: types.UPDATE, field: e.field, value: e.value })}
                />
                <StaticInput
                    props={{ name: 'Last Name', field: 'lastName' }}
                    handleChange={(e) => dispatch({ type: types.UPDATE, field: e.field, value: e.value })}
                />
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}