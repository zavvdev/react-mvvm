import { Component, type PropsWithChildren } from "react";
import { reportCriticalAppError } from "@/application/utilities/general";

interface State {
  hasError: boolean;
  error: unknown;
  errorInfo: unknown;
}

interface Props extends PropsWithChildren {}

export class ErrorBoundaryView extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null, errorInfo: null, hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    reportCriticalAppError(errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <div>{JSON.stringify(this.state.errorInfo, null, 2)}</div>;
    }

    return this.props.children;
  }
}
