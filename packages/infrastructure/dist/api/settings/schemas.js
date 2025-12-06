import { Settings } from "@react-mvvm/domain";
import { response } from "../schemas";
// Get DTO
export var getDto = {
  response: response(Settings.schema),
};
// Set DTO
export var setDto = {
  request: Settings.schema,
  response: response(Settings.schema),
};
