interface AuthorizationHeader {
  schema: 'Bearer' | 'Basic' | string
  token: string
}

export default AuthorizationHeader
