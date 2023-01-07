const ProtectedRoute = ({ children }) => {
  // if (!authCtx?.currentUser) {
  //   return <Navigate to="/login" />;
  // }

  return children;
};

export default ProtectedRoute;
