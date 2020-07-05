import { User } from "@common/types.ts"

export interface UserDTO extends User {
  password: string;
}
