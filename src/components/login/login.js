import { useState } from 'react';
import background from '../background.png';

const Login = () => {
  const [form, setForm] = useState({ name: null, pass: null });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ form });
    console.log('submit login');
  };
  return (
    <div className="h-screen bg-[#32373b] flex flex-col items-center gap-y-3 p-3">
      <img className="max-h-[50vh] sm:mt-0 mt-24" alt="background" src={background} />
      <p className>Welcome to Flightfull!</p>
      <form className="flex flex-col gap-y-3" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Username" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, pass: e.target.value })} />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
