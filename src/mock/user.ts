export type User = {
  id: string;
  role: string;
  permissions: Permission[];
};
export type Permission = {
  id: string;
  actions: Action[];
  resource: Resource;
};
export enum Resource {
  event_basic = "event_basic",
  event_premium = "event_premium",
}
export enum Action {
  read = "read",
  write = "write",
  update = "update",
  delete = "delete",
}

export const users: User[] = [
  {
    id: "user1",
    role: "admin",
    permissions: [
      {
        id: "p2",
        actions: [
          Action.read,
          Action.write,
          Action.update,
          Action.delete,
        ],
        resource: Resource.event_basic,
      },
      {
        id: "p2",
        actions: [
          Action.read,
          Action.write,
          Action.update,
          Action.delete,
        ],
        resource: Resource.event_premium,
      },
    ],
  },
  {
    id: "user2",
    role: "editor",
    permissions: [
      {
        id: "p5",
        actions: [Action.read, Action.write, Action.update],
        resource: Resource.event_basic,
      },
      {
        id: "p5",
        actions: [Action.read, Action.write, Action.update],
        resource: Resource.event_premium,
      },
    ],
  },
  {
    id: "user3",
    role: "viewer",
    permissions: [
      {
        id: "p7",
        actions: [Action.read],
        resource: Resource.event_basic,
      },
    ],
  },
  {
    id: "user4",
    role: "premium viewer",
    permissions: [
      {
        id: "p7",
        actions: [Action.read],
        resource: Resource.event_basic,
      },
      {
        id: "p7",
        actions: [Action.read],
        resource: Resource.event_premium,
      },
    ],
  },
];
export const getUserById = (id: string) => {
  return users.find((user) => user.id === id);
};
