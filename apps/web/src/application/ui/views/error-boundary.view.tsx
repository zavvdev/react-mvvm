import { Component, type PropsWithChildren } from "react";
import { errorTracker } from "@/application/services/error-tracker.service";

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
    errorTracker.report({
      location: "error-boundary",
      error: {
        error,
        errorInfo,
      },
    });
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <div style={{ whiteSpace: "pre-wrap" }}>
            {JSON.stringify(this.state.errorInfo, null, 2)}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
