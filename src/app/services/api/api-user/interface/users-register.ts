export interface ReqUsersRegister {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: string;
    phoneNumber: string;
    image: string;
    role: string;
}

export interface ResUsersRegister {
    resCode: string;
    resData: ResUsersRegisterData;
    msg: string;
}

export interface ResUsersRegisterData {
    id: number;
    email: string;
    userName: string;
    firstName: string;
    lastName: string;
    role: ResUsersRegisterDataRole;
    status: boolean;
    image: string;
    gender: ResUsersRegisterDataGender;
    phoneNumber: string;
}

export interface ResUsersRegisterDataRole {}

export interface ResUsersRegisterDataGender {}
