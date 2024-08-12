export type UserRole = "admin" | "user";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  role: UserRole;
};
