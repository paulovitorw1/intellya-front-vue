import { User } from "@/Interfaces/user.interface";
import { api } from "@/services/config"

export class UserRest {
  getUsers(): Promise<User[]> {
    const url = "users";
    return api.get(url).then((response) => response.data);
  }

  getUserById(id: string): Promise<User> {
    const url = `users/${id}`;
    return api.get(url).then((response) => response.data);
  }

}