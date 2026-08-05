import "./Toast.css";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

function Toast({
  type = "success",
  message,
  visible
}) {
  if (!visible) return null;

  const icon =
    type === "success" ? (
      <CheckCircle size={20} />
    ) : type === "error" ? (
      <AlertCircle size={20} />
    ) : (
      <Loader2 className="toast-spinner" size={20} />
    );

  return (
    <div className={`toast ${type}`}>
      {icon}
      <span>{message}</span>
    </div>
  );
}

export default Toast;