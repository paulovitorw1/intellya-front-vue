
export interface UserListPresenterInterface {
  getUsers(): void;
  filtersUsers(valueSearch: string): void;
}