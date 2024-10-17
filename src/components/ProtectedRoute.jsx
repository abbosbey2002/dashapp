    // src/components/ProtectedRoute.jsx

    import React from 'react';
    import { Navigate } from 'react-router-dom';
    import { useAuth } from '../context/AuthContext';

    const ProtectedRoute = ({ element, setShowModal }) => {
        const { isAuthenticated } = useAuth();

        if (!isAuthenticated) {
            setShowModal(true);
            return  <Navigate to="/" />;
        }

        return element;
    };

    export default ProtectedRoute;
