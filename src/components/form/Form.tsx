import { FC, PropsWithChildren, useState } from "react";
import "./index.css";

interface FormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}


const Form: FC<PropsWithChildren<FormProps>> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form-container">
      <input className="form-input" type="email" name="user_email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
      <input className="form-input" type="password" name="user_password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />
      <button className="form-btn" onClick={() => handleClick(email, password)}>{title}</button>
    </div>
  );
}

export default Form;
