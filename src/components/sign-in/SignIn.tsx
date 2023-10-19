import { FC } from "react";
import Form from "../form/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setUser } from "../../store/slices/userSlice";


const SignIn: FC = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignIn = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.getIdToken
        }));
        navigate("/");
      })
      .catch(() => alert("Invalid user!"));
  }

  return (
    <Form title="Sign in" handleClick={handleSignIn} />
  );
}

export default SignIn;
