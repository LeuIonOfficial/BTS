import { createContext } from "react";
import { GetUserType } from "@models/user.ts";

export const UserContext = createContext<GetUserType | undefined>(undefined);
