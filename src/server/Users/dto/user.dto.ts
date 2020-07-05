import { User } from "../../../common/types";

export interface UserDTO extends User {
  password: string;
}
