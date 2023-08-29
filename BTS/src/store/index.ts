import { createContext } from "react";
import { userProfile } from "../models/useProfileType.ts";

export const UserContext = createContext<userProfile | undefined>(undefined);
