import { FC, useState } from "react";
import Form from "../form/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { setUser } from "../../store/slices/userSlice";
import ModalContainer from "../modal-container/ModalContainer";


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

  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      {isModalOpen &&
      <ModalContainer onClick={() => setIsModalOpen(false)}>
        <Form title="Sign in" handleClick={handleSignIn} />
      </ModalContainer>}
    </>
  );
}

export default SignIn;
