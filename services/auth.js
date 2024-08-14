import jwt from "jsonwebtoken"
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Destructure environment variables
const { secret } = process.env;
// Access environment variables


export function set_user(data) {
   return jwt.sign({_id:data._id,
   Email:data.Email}, secret)
}
export function get_user(token) {
   try {
      return jwt.verify(token, secret)
   }
   catch{
   }
}

