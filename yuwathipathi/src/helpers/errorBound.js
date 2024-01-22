// errorBound.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
    // You can log the error or perform additional actions here
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <p>Something went wrong</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
