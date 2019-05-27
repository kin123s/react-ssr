import * as React from 'react';

export interface IWithProps {
  
}

export default class With extends React.Component<IWithProps, any> {

  constructor(props: IWithProps) {
    super(props);
  }

  render() {
    return (
      <div>
        TEST
        {this.props.children}
      </div>
    );
  }
}
