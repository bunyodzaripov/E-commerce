import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <p className="text-xl font-bold">Something went wrong!</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-foreground text-background rounded-full"
            >
              Reload page
            </button>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
