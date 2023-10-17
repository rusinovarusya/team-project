import { FC, PropsWithChildren } from "react";


const SignInPage: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <article>
      <h2>Sign in page</h2>
      {children}
    </article>
  );
}

export default SignInPage;
