import * as React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";

export default () => {
  const [connection_Message, set_Connection_Message] = React.useState("");
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  async function onSubmit(data) {
    let get_Data = await fetch('http://localhost:5000/');
    let result = await get_Data.json();
    let result_Value = await result.value;
    if (result_Value == 'false') { set_Connection_Message('Incorrect username or password, please type again.') }
    else if (result_Value === 'true') { document.getElementById("login").click(); }
  };
  return (
    <div className="App">
      <header className="App-header">
        <form id='form_ilan' onSubmit={handleSubmit(onSubmit)}>
          <div className="Login_To_Account-Filds">
            <div className="Filds-Text_Field">
              <div className="Filds-Text_Username">
                <TextField
                  id="standard-input"
                  name='email'
                  label='Username '
                  variant="standard"
                  InputProps={{ style: { fontSize: 10 } }}
                  {...register('email', { required: 'יש למלאות שדה זו' })}
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                  style={{ width: '25ch' }}
                />
              </div>
              <div className="Filds-Text_Password">
                <TextField
                  id="standard-password-input"
                  type="password"
                  name='password'
                  label='Password'
                  variant="standard"
                  style={{ width: '25ch' }}
                  InputProps={{ style: { fontSize: 10 } }}
                  {...register('password', { required: 'יש למלאות שדה זו' },)}
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                />
              </div>
            </div>
          </div>
          <div className="Login_To_Account-Button">
            <p id="connection_Message" >{connection_Message}</p>
            <button variant="contained" color="primary" type="submit" className="Div_Conect-Btn">
              Log in
            </button>
            <Link id="login" to="Login" />
          </div>
        </form>
      </header>
    </div>
  );
}
