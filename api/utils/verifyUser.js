
import { errorHandler } from './error.js';
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
      const token = req.cookies.access_token;
      console.log('token', token);
      if(!token) {
        return next(errorHandler(401,'Unauthorized'));
      }
      
      jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return next(errorHandler(401, 'Unauthorized'));
        }

        req.user = user ;
        next();
      })

}