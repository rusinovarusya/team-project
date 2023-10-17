import { FC } from "react";
import Form from "../form/Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setUser } from "../../store/slices/userSlice";


const SignUp: FC = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignUp = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.getIdToken
        }));
        navigate("/");
      })
      .catch(console.error)
  }

  return (
    <Form title="Sign up" handleClick={handleSignUp} />
  );
}

export default SignUp;
