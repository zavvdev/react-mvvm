import { User } from "@react-mvvm/domain";
import { response } from "../schemas";
// Get profile DTO
export var getProfileDto = {
  response: response(User.schema),
};
