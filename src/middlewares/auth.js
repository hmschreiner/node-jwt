import jwt from 'jsonwebtoken'
import config from '../config'

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(" ")[0] === 'Bearer'
        ? req.headers.authorization.split(" ")[1]
        : (req.body.token || req.query.token || req.headers['x-access-token'])

    if (!token) {
        return next()
    }

    try {
        const decodedToken = await jwt.verify(token, config.publicKey, config.authOptions)
        req.decoded = decodedToken
        next()
    } catch (error) {
        res.status(401).send({
            error: 'Token não informado ou inválido!'
        })
    }
}

const protectRoute = (req, res, next) => {
    if(req.decoded){
       return next()
    }
    
    res.status(401).send({
        error: 'Não autorizado!'
    })
}

export {
    verifyToken,
    protectRoute,
}