import * as React from "react";

import { CustomButton } from "@views/components/button/CustomButton";

export interface ILoginProps {
  id?: string;
}

export default class Login extends React.Component<ILoginProps, any> {
  public render() {
    return (
      <div>
        Login Components gg
        <CustomButton>test</CustomButton>
      </div>
    );
  }
}
