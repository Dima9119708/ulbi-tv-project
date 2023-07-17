import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorBoundaryUI } from 'widgets/ErrorBoundaryUI';

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean,
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        console.log('error => getDerivedStateFromError', error);
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        console.log('error => componentDidCatch', error, info);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            // You can render any custom fallback UI
            return <Suspense fallback=""><ErrorBoundaryUI /></Suspense>;
        }

        return children;
    }
}
