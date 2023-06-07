import { UserAdapter } from "@/Interfaces/userAdapter.interface";
import { UserListView } from "@/Interfaces/userView.interface";
import { User } from "@/Interfaces/user.interface";
import { UserRest } from "@/services/api/user.rest";
import { adaptAPIUserToUser } from "@/Adapter/adaptAPIUserToUser";
import { UserListPresenterInterface } from "@/Interfaces/userListPresenter.interface";


export class UserListPresenter implements UserListPresenterInterface {
  private view: UserListView;
  private _users: UserRest
  private originalUsers: UserAdapter[];

  constructor(view: UserListView) {
    this.view = view;
    this._users = new UserRest();
    this.originalUsers = [];
  }


  getUsers(): void {
    this._users
      .getUsers()
      .then((data: User[]) => {
        const users = adaptAPIUserToUser(data) as UserAdapter[]
        this.originalUsers = users;
        this.view.setUsers(users)
      })
      .catch((error) => {
        throw error;
      });
  }

  filtersUsers(valueSearch: string): void {
    const filteredUsers = this.originalUsers.filter(user => {
      const nameMatch = user.name.toLowerCase().includes(valueSearch.toLowerCase());
      const emailMatch = user.email.toLowerCase().includes(valueSearch.toLowerCase());
      return nameMatch || emailMatch;
    });

   this.view.setUsers(filteredUsers)
  }
}