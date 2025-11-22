import { asValue, injectable } from "@react-mvvm/di";
import { authViewModel } from "./AuthViewModel";

export var registerAuthModule = () => {
  injectable({
    authViewModel: asValue(authViewModel),
  });
};
