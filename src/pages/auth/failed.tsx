import React from 'react';

export default function Failed() {
    return (
        <div className="container has-text-centered">
            <div className="notification is-danger">
                <p>Error during sign in process! Please try again...</p>
            </div>
        </div>
    );
}
