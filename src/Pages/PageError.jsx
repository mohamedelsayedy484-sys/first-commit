
import "./PageError.css";
import { Link } from "react-router-dom";
function PageError() {
    return (
        <main className="error-page" role="main">
            <div className="error-card">
                <div className="error-illustration" aria-hidden="true">
                    <svg viewBox="0 0 120 120" width="120" height="120" fill="none">
                        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="6" />
                        <line x1="72" y1="72" x2="104" y2="104" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                        <line x1="38" y1="38" x2="62" y2="62" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                        <line x1="62" y1="38" x2="38" y2="62" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                </div>

                <p className="error-code">404</p>
                <h1 className="error-title">Page not found</h1>
                <p className="error-text">
                    Sorry, we couldn't find the page you're looking for. It may have been
                    moved, renamed, or never existed in the first place.
                </p>

                <div className="error-actions">
                    <Link to="/home" className="btn btn-primary">Back to Home</Link>
                    <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
                        Go Back
                    </button>
                </div>
            </div>
        </main>
    );
}

export default PageError;