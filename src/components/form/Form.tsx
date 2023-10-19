import { FC, PropsWithChildren, useState } from "react";

interface FormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}


const Form: FC<PropsWithChildren<FormProps>> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input type="email" name="" id="" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
      <input type="password" name="" id="" value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />
      <button onClick={() => handleClick(email, password)}>{title}</button>
    </div>
  );
}

export default Form;
