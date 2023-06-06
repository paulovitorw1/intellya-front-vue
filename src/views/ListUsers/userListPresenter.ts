import { UserAdapter } from "@/Interfaces/userAdapter.interface";
import { UserListView } from "@/Interfaces/userView.interface";
import { ListUsersService } from "./listUsers.service";


export class UserListPresenter {
    private view: UserListView;
    private service: ListUsersService;

    constructor(view: UserListView) {
        this.view = view;
        this.service = new ListUsersService();
    }

    getUsers(): void {
        this.service.getUsers()
            .then((users: UserAdapter[]) => {
                this.view.setUsers(users);
            })
            .catch((error) => {
                console.error(error);
            });
    }
}