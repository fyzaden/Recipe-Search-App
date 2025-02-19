import { useState, useContext } from 'react';
import {UserDispatchContext, UserActionTypes} from '../UserContext';
import './styles.css';

export const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  const dispatch = useContext(UserDispatchContext);

	const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch({type: UserActionTypes.login, payload: {email: email, password: password}});
  };

	return (
		<form onSubmit={handleSubmit} class='form'>
			<label htmlFor='email-input'>Email</label>
			<input
				id='email-input'
				type='email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label htmlFor='password-input'>Password</label>
			<input
				id='password-input'
				type='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>

			<button class='btn--success' type='submit'>
				Login
			</button>
		</form>
	);
};
