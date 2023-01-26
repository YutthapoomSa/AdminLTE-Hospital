export interface ReqUserUpdate {
    userId: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    role: string;
}

export interface ResUserUpdate {
    resCode: string;
    resData: ResUserUpdateData;
    msg: string;
}

export interface ResUserUpdateData {
  id: number
  email: string
  firstName: string
  lastName: string
  phoneNumber: string
}
