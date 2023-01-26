export class reqLogin {
    email: string;
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
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    status: boolean;
    image: any;
    gender: string;
    phoneNumber: string;
    accessToken: string;
    refreshToken: string;
    expire: string;
}
