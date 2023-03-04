import { Role } from "./role";

export class User {
  id: number;
  img: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  first_name?: string;
  last_name?: string;
  role_name?: string;
  role: Role;
  token: string;
}
