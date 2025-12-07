import { Component, type PropsWithChildren } from "react";
import { errorTracker } from "@/core/services/error-tracker.service";
import { Crash } from "@/modules/crash/_gateway/output";

interface State {
  hasError: boolean;
  error: unknown;
  errorInfo: unknown;
}

interface Props extends PropsWithChildren {}

export class ErrorBoundary extends Component<Props, State> {
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
        <Crash
          error={{
            error: this.state.error,
            errorInfo: this.state.errorInfo,
          }}
        />
      );
    }

    return this.props.children;
  }
}
