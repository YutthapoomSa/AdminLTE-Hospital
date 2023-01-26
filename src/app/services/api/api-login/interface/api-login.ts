export class reqLogin {
    username: string;
    password: string;
}

export class resLogin {
    resCode: string;
    resData: ResLoginData;
    msg: string;
}

export class ResLoginData {
    id: number;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    role: string;
    status: boolean;
    image: string;
    gender: string;
    phoneNumber: string;
    accessToken: string;
    refreshToken: string;
    expire: string;
}
