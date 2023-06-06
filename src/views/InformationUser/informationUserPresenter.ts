import { adaptAPIUserToUser } from "@/Adapter/adaptAPIUserToUser";
import { User } from "@/Interfaces/user.interface";
import { UserAdapter } from "@/Interfaces/userAdapter.interface";
import { UserInforView } from "@/Interfaces/userView.interface";
import { UserRest } from "@/services/api/user.rest";

export class InformationUserPresenter {
    private view: UserInforView;
    private _user:  UserRest

    constructor(view: UserInforView) {
        this.view = view;
        this._user = new UserRest()
    }

    getUserById(id: string): void {
         this._user
          .getUserById(id)
          .then((data: User) => {
            const user = adaptAPIUserToUser(data) as UserAdapter
            this.view.setUser(user)
          })
          .catch((error) => {
            console.error(error);
            throw error;
          });
      }
}