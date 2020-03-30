import * as jsonwebtoken from 'jsonwebtoken'

interface IToken {
  secret: string
  options: {
    algorithm: string
    expires: string
    issuer: string
  }
}

export interface ITokenPayload {
  id: string
  email: string
  role: string
}
type TTokenPayload = Promise<ITokenPayload | void>

const jwt: IToken = {
  secret: process.env.JWT_SECRET,
  options: {
    algorithm: process.env.JWT_ALGORITHM,
    expires: process.env.JWT_EXPIRES,
    issuer: process.env.JWT_ISSUER,
  },
}

export class TokenError extends Error {
  public status: 400
}

const getUserFromToken = async (token: string): TTokenPayload => {
  const user = await jsonwebtoken.verify(token, jwt.secret, jwt.options)
  return user
}

const getTokenFromHeader = request => {
  const authorization = request?.headers?.authorization || ''
  const [key, token] = authorization.split(' ')

  if (key === 'Bearer:' && token.length > 0) {
    return token
  }

  throw new TokenError('Bad Authorization header format. Format should be: "Authorization: Bearer <token>')
}

export const verify = async (request): TTokenPayload => {
  const token = getTokenFromHeader(request)
  if (!token) return

  const user = await getUserFromToken(token)
  return user
}
