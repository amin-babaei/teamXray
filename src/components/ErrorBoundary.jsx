import React from 'react'
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
   
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            <div className='min-h-screen flex flex-col items-center justify-center text-white'>
                <Link to={"/"} className="w-40 block mb-10 mx-auto">
                    <img src="/images/logo.svg" alt="xrayteam"/>
                </Link>
                <h1 className='text-xl'>
                    Something went wrong. Try Again later
                </h1>
            </div>
            )
      }
  
      return this.props.children; 
    }
  }
  export default ErrorBoundary