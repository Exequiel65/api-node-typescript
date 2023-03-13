import jwt, { Jwt } from 'jsonwebtoken';

export class jwtToken {
    private secret: string = process.env.JWT_SECRET || 'prueba';
    tokenSign(user: any) {
        return jwt.sign(
            {
                _id: user._id,
                email: user.email,
                admin: user.admin
            },
            this.secret,
            {
                expiresIn: "1h"
            })
    }
    async verifyToken(token:string) {
        try {
            return jwt.verify(token, this.secret)
        } catch (e) {
            return null
        }

    }

    async getBearer(bearer: string | undefined) {
        const accessToken = (bearer !== undefined ? bearer : '').replace('Bearer ', '');

        const data = this.verifyToken(accessToken);

        return data
    }
}

