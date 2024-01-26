import User from '../models/user.model.js';
import bcryptjs from "bcryptjs";
import {errorHandler} from "../utils/error.js";

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