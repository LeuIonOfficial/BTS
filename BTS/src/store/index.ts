import { createContext } from "react";
import { userProfile } from "@models/user.ts";

export const UserContext = createContext<userProfile | undefined>(undefined);
