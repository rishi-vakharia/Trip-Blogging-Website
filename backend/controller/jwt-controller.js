
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import Token from '../model/token.js';

import logger from '../utils/logger.js';

dotenv.config();

export const authenticateToken = (request, response, next) => {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token == null) {
        // logger.info('token is missing')
        // return response.status(401).json({ msg: 'token is missing' });
        // logger.info({ message: 'Token is missing', method: request.method, path: request.path, headers: request.headers, timestamp: new Date().toISOString() });
        return response.status(401).json({ msg: 'Token is missing' });
    }

    jwt.verify(token, process.env.ACCESS_SECRET_KEY, (error, user) => {
        if (error) {
            // logger.info('invalid token')
            // return response.status(403).json({ msg: 'invalid token' })
            // logger.info({ message: 'Invalid token', method: request.method, path: request.path, headers: request.headers, timestamp: new Date().toISOString() });
            return response.status(403).json({ msg: 'Invalid token' })
        }

        // logger.info('authenticate token success')
        // logger.info({ message: 'Authenticate token success', method: request.method, path: request.path, headers: request.headers, timestamp: new Date().toISOString() });
        request.user = user;
        next();
    })
}

export const createNewToken = async (request, response) => {
    const refreshToken = request.body.token.split(' ')[1];

    if (!refreshToken) {
        // logger.info('refresh token missing')
        // return response.status(401).json({ msg: 'Refresh token is missing' })
        // logger.info({ message: 'Refresh token missing', method: request.method, path: request.path, body: request.body, timestamp: new Date().toISOString() });
        return response.status(401).json({ msg: 'Refresh token is missing' })
    }

    const token = await Token.findOne({ token: refreshToken });

    if (!token) {
        // logger.info('referesh token invalid')
        // return response.status(404).json({ msg: 'Refresh token is not valid'});
        // logger.info({ message: 'Refresh token invalid', method: request.method, path: request.path, body: request.body, timestamp: new Date().toISOString() });
        return response.status(404).json({ msg: 'Refresh token is not valid' });
    }

    jwt.verify(token.token, process.env.REFRESH_SECRET_KEY, (error, user) => {
        if (error) {
            // logger.info('referesh token invalid')
            // response.status(500).json({ msg: 'invalid refresh token'});
            // logger.info({ message: 'Refresh token invalid', method: request.method, path: request.path, body: request.body, timestamp: new Date().toISOString() });
            response.status(500).json({ msg: 'Invalid refresh token' });
        }
        const accessToken = jwt.sign(user, process.env.ACCESS_SECRET_KEY, { expiresIn: '15m'});

        // logger.info('Create new token success', accessToken)
        // return response.status(200).json({ accessToken: accessToken })
        // logger.info({ message: 'Create new token success', accessToken, method: request.method, path: request.path, body: request.body, timestamp: new Date().toISOString() });
        return response.status(200).json({ accessToken: accessToken })
    })


}