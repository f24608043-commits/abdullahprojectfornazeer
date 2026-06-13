import { Navigate } from "react-router-dom";

function AdminIndex() {
  return <Navigate to="/admin/login" replace />;
}

export default AdminIndex;
