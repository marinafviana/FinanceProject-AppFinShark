import { toast } from "react-toastify";

export const handleError = (error: any) => {
  if (error?.isAxiosError) {
    var err = error.response;
    if (Array.isArray(err?.data)) {
      for (let val of err.data) {
        toast.warning(val.description ?? val);
      }
    } else if (Array.isArray(err?.data.errors)) {
      for (let val of err?.data.errors) {
        toast.warning(val.description);
      }
    } else if (typeof err?.data.errors === "object") {
      for (let e in err?.data.errors) {
        toast.warning(err.data.errors[e][0]);
      }
    } else if (typeof err?.data === "string") {
      const isTechnicalError =
        err.data.includes("Microsoft.") ||
        err.data.includes("System.") ||
        err.data.includes("Exception");

      toast.warning(
        isTechnicalError
          ? "Nao foi possivel concluir a operacao. Tente novamente."
          : err.data
      );
    } else if (err?.data) {
      toast.warning("Nao foi possivel concluir a operacao. Tente novamente.");
    } else if (err?.status === 401) {
      toast.warning("Please login");
      window.history.pushState({}, "LoginPage", "/login");
    } else if (err) {
      toast.warning(err?.data);
    }
  }
};
