import type User from "./User";

export default interface UserLogin extends User {
  token: string;
}
