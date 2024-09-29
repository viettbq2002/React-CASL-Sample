import { useContext } from "react";
import { SessionContext } from "./SessionProvider";
import { Can } from "@casl/react";
import { Action, Resource } from "../mock/user";
interface PrivateProps {
  children: React.ReactNode;
  action: Action | string;
  subject: Resource | string;
}
const Private = ({ children, action, subject }: PrivateProps) => {
  const ability = useContext(SessionContext);

  if (!ability) return null;
  return (
    <Can I={action} a={subject} ability={ability}>
      {children}
    </Can>
  );
};

export default Private;
