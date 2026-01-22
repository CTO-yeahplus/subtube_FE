import React from 'react';

import { BaseTypography } from '../base-typography';
import * as S from './index.style';

interface State {
  hasError: boolean;
}

const { Title } = BaseTypography;

class ErrorBoundary extends React.Component<any, State> {
  constructor(props: {}) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: React.ErrorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <S.wrapper>
          <Title level={1}>Oops, there is an error!</Title>
          <S.reloadBtn
            onClick={() => {
              this.setState({ hasError: false });
            }}
          >
            Try again?
          </S.reloadBtn>
        </S.wrapper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
