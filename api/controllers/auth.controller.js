import User from '../models/user.model.js';
import bcryptjs from "bcryptjs";
import {errorHandler} from "../utils/error.js";
import jwt from 'jsonwebtoken';


export const Signup = async (req, res, next) => {
    const {username, email, password} = req.body;

    if (!username || !email || !password || username === "" || email === "" || password === "") {
        next(errorHandler(400, 'All fields are required'));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password : hashedPassword
    });

    try{
          await newUser.save();
          res.status(200).json({message : "User Added to Database Succesfully"});
    }catch(error) {
         next(error);
    }
};


export const Signin = async(req, res, next) => {
     const {email, password} = req.body;

     if (!email || !password || email === "" || password === "") {
         return next(errorHandler(400, 'All feilds are required'));
     }

     try{
         const validUser = await User.findOne({email});

         if (!validUser) {
           return next(errorHandler(400, 'User not Founded'))
         }

         const passwordValid = bcryptjs.compareSync(password, validUser.password);
         if (!passwordValid) {
            return next(errorHandler(400, 'Invalid Password'))
         }

         const token = jwt.sign({id : validUser._id}, process.env.JWT_SECRET_KEY);

         const {password : pass, ...rest} = validUser._doc;

         res.status(200).cookie('access_token',token,{httpOnly : true}).json(rest);

     }catch(err){
         next(err)
     }
}