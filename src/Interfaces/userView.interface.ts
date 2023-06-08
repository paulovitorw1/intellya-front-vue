import { UserAdapter } from "./userAdapter.interface"

interface UserListView {
    setUsers(users: UserAdapter[]): void;
    filtersUsers(): void;
    redirectForUserInfor(id: string): void
}

interface UserInforView {
    setUser(user: UserAdapter): void;
}


export { UserListView, UserInforView }