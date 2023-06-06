import { adaptAPIUserToUser } from "@/Adapter/adaptAPIUserToUser";
import { User } from "@/Interfaces/user.interface";
import { UserAdapter } from "@/Interfaces/userAdapter.interface";
import { UserRest } from "@/services/api/user.rest";

export class ListUsersService {
  constructor(private _users = new UserRest()) { }

  getUsers(): Promise<UserAdapter[]> {
    return this._users
      .getUsers()
      .then((data: User[]) => {
        const user = adaptAPIUserToUser(data) as UserAdapter[]
        return user;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }
}