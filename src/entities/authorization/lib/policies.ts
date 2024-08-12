import { type User } from "entities/user";

export const POLICIES = {
  "comment:delete": (user: User) => {
    // You can also add comment as a second argument, and check if the user is the author of the comment
    if (user.role === "admin") return true;
    return false;
  },
};
