import React, { useState } from 'react';

const INITIAL_STATE = {
    name: '',
    address: '',
    location: '',
    image: '',
};
const Form = () => {
    const [state, setState] = useState(INITIAL_STATE);

    const submitForm = (ev) => {
        ev.FormularioDefault();
    };
    const handleInput = (ev) => {
        const { name, value } = ev.target;
        setState({ ...state, [name]: value });
    };

    return (
        <form onSubmit={submitForm}>
            <fieldset>
                <label>
                    <p> Nombre </p>
                    <input type="text" name="name" value={state.name} onChange={handleInput} />
                </label>
                <label>
                    <p> Apellidos </p>
                    <input type="text" name="address" value={state.surname} onChange={handleInput} />
                </label>
                <label>
                    <p >E-mail </p>
                    <input type="text" name="email" value={state.email} onChange={handleInput} />
                </label>
                <label>
                    <p> Password </p>
                    <input type="text" name="fecha" value={state.password} onChange={handleInput} />
                </label>
                <div>
                    <button type="submit">Crear Usuario</button>
                </div>
            </fieldset>
        </form>
    );
}

export default Form;