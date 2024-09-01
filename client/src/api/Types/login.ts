interface User {
  id: string;
  email: string;
  diskSpace: number;
  usedSpace: number;
}

export interface loginReturn {
  token: string;
  user: User;
}
