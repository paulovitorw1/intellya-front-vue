import { User } from "@/Interfaces/user.interface";
import { UserAdapter } from "@/Interfaces/userAdapter.interface";
import { RoleEnum } from "@/enums/typeRoles";

export function adaptAPIUserToUser(apiUser: User | User[]): UserAdapter | UserAdapter[] {
    if (Array.isArray(apiUser)) {
      // Caso seja uma lista de objetos User
      return apiUser.map((user) => adaptUser(user));
    } else {
      // Caso seja um único objeto User
      return adaptUser(apiUser);
    }
  }
  
  function adaptUser(apiUser: User): UserAdapter {
    const user: UserAdapter = {
      id: apiUser.id.toString(),
      name: apiUser.name,
      email: apiUser.email,
      role: mapRole(apiUser.role),
      active: mapStatus(apiUser.active),
      created_at: formatedDate(apiUser.created_at),
    };
    return user;
  }

function mapStatus(apiStatus: boolean): string {
    return apiStatus ? "Ativo" : "Inativo"
}

function mapRole(apiRole: string): RoleEnum {
    switch (apiRole) {
        case "member":
            return RoleEnum.MEMBER;
        case "admin":
            return RoleEnum.ADMIN;
        default:
            throw new Error("Role não reconhecida: " + apiRole);
    }
}

function formatedDate(dataString: string): string {
    const data = new Date(dataString);
    const day = data.getDate().toString().padStart(2, '0');
    const month = (data.getMonth() + 1).toString().padStart(2, '0');
    const year = data.getFullYear().toString();
    const hours = data.getHours().toString().padStart(2, '0');
    const minutes = data.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} às ${hours}:${minutes}`;
}