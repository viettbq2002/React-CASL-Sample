import {
  createMongoAbility,
  MongoAbility,
  Subject,
  MongoQuery,
} from "@casl/ability";
import { createContext, useEffect, useState } from "react";
import { Action, getUserById } from "../mock/user";
export type SessionContextType = MongoAbility | undefined;
export const SessionContext =
  createContext<SessionContextType>(undefined);
type PossibleAbilities = [Action | string, Subject];
type Conditions = MongoQuery;
interface SessionProviderProps {
  userId: string;
  children: React.ReactNode;
}

export const SessionProvider = ({
  userId,
  children,
}: SessionProviderProps) => {
  const [ability, setAbility] = useState<MongoAbility>(
    createMongoAbility<PossibleAbilities, Conditions>(),
  );

  useEffect(() => {
    const user = getUserById(userId);
    const rules = user?.permissions.flatMap((permission) =>
      permission.actions.map((action) => ({
        action: action as Action,
        subject: permission.resource,
      })),
    );

    setAbility(
      createMongoAbility<PossibleAbilities, Conditions>(rules),
    );
  }, [userId]);
  return (
    <SessionContext.Provider value={ability}>
      {children}
    </SessionContext.Provider>
  );
};
