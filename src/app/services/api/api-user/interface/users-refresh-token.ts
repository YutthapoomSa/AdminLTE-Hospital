export interface ReqRefreshToken {
  accessToken: string
  refreshToken: string
}

export interface ResRefreshToken {
  resCode: string
  resData: ResRefreshTokenData
  msg: string
}

export interface ResRefreshTokenData {
  accessToken: string
  refreshToken: string
  expire: string
}
