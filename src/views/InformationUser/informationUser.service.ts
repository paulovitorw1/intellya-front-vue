import { UserAdapter } from "@/Interfaces/userAdapter.interface";
import { User } from "@/Interfaces/user.interface";
import { UserRest } from "@/services/api/user.rest";
import { adaptAPIUserToUser } from "../../Adapter/adaptAPIUserToUser";

export class InformationUserService {
  constructor(private _users = new UserRest()) { }

  getUserById(id: string): Promise<UserAdapter> {
    return this._users
      .getUserById(id)
      .then((data: User) => {
        const user = adaptAPIUserToUser(data) as UserAdapter
        return user;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }
}