import React from 'react';
import { useForm } from "react-hook-form";
import ReactDOM from 'react-dom/client';
import './style/style.css'
import BitcoinChart from './components/BitcoinCharts';

function App(){
  const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (form) => {
    if (form) {
      console.log(form)
    }
  }

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <label>User</label>
    //   <input className={errors.user ? 'inputError' : undefined } type="text" {...register("user", { required: true, maxLength: 10, minLength: 5 })} />
    //   {errors.user && errors.user.type === 'required' ? <span>Campo obbligatorio</span> : <span></span>}
    //   {errors.user && errors.user.type === 'minLength' ? <span> Valore Troppo corto</span> : <span></span>}
    //   {errors.user && errors.user.type === 'maxLength' ? <span> Valore Troppo lungo</span> : <span></span>}
      
    //   <label>Password</label>
    //   <input className={errors.password ? 'inputError' : undefined } type="password" 
    //          {...register("password", { required: true, pattern: passwordPattern, maxLength: 20, minLength: 8 })}
    //    />
    //   {errors.password && errors.password.type === 'required' ? <span>Campo obbligatorio</span> : <span></span>}
    //   {errors.password && errors.password.type === 'minLength' ? <span> Valore Troppo corto</span> : <span></span>}
    //   {errors.password && errors.password.type === 'maxLength' ? <span> Valore Troppo lungo</span> : <span></span>}
    //   {errors.password && errors.password.type === 'pattern' ? <span>Password non sicura: inserire almeno un carattere speciale, un numero e una lettera maiuscola.</span> : <span></span>}
      
    //   <input type="submit" value="invia" />
    // </form>
    <BitcoinChart />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
