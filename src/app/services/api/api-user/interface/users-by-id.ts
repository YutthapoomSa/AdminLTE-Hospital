export interface ResUserById {
    resCode: string;
    resData: ResUserByIdData;
    msg: string;
}

export interface ResUserByIdData {
  id: number
  email: string
  firstName: string
  lastName: string
  role: string
  status: boolean
  image: any
  gender: string
  phoneNumber: string
}

