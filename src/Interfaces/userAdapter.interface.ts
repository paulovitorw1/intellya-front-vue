import { RoleEnum } from "@/enums/typeRoles"

interface UserAdapter {
    id: string;
    name: string;
    email: string;
    role: RoleEnum;
    active: string;
    created_at: string;
}

export { UserAdapter }