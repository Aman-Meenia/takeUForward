import { UserContext } from "@/store/User";
import { useContext } from "react";
import toast from "react-hot-toast";
export const useLogin = () => {
  const { userLogin, setUserLogin } = useContext(UserContext);
  const login = ({ name, password }) => {
    if (name == "admin" && password == "123123") {
      setUserLogin(true);
      return true;
    } else {
      toast.error("Invalid credentials", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return false;
    }
  };

  return { login };
};
