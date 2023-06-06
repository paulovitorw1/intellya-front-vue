import { UserAdapter } from "@/Interfaces/userAdapter.interface";
import { UserListView } from "@/Interfaces/userView.interface";
import { User } from "@/Interfaces/user.interface";
import { UserRest } from "@/services/api/user.rest";
import { adaptAPIUserToUser } from "@/Adapter/adaptAPIUserToUser";


export class UserListPresenter {
    private view: UserListView;
    private _users:  UserRest

    constructor(view: UserListView) {
        this.view = view;
        this._users = new UserRest()
    }

    getUsers(): void {
         this._users
          .getUsers()
          .then((data: User[]) => {
            const users = adaptAPIUserToUser(data) as UserAdapter[]
            this.view.setUsers(users)
          })
          .catch((error) => {
            console.error(error);
            throw error;
          });
      }
}