import { FC, PropsWithChildren } from "react";


const SignUpPage: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <article>
      <h2>Sign up page</h2>
      {children}
    </article>
  );
}

export default SignUpPage;
