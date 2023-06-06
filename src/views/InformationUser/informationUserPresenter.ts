import { UserAdapter } from "@/Interfaces/userAdapter.interface";
import { UserInforView } from "@/Interfaces/userView.interface";
import { InformationUserService } from "./informationUser.service";

export class InformationUserPresenter {
    private view: UserInforView;
    private service: InformationUserService;

    constructor(view: UserInforView) {
        this.view = view;
        this.service = new InformationUserService();
    }

    getUsers(id: string): void {
        this.service.getUserById(id)
            .then((users: UserAdapter) => {
                this.view.setUser(users);
            })
            .catch((error) => {
                console.error(error);
            });
    }
}