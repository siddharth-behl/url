import { get_user } from "../services/auth.js"

async function RestrictToLoggedInUserOnly(req, res, next) {
    const uid1 = req.cookies?.uid
    const uid2 = req.headers.authorization
    if (uid1 && !uid2) {

        req.authentication_data = get_user(uid1)

        next()
    }
    else if(uid2 && !uid1){
        const token=uid2.split(" ")[1]
        req.authentication_data = get_user(token)

        next()
    }
    else{
         res.redirect(`${req.myurl}/login`)
    }


    

    
}
export default RestrictToLoggedInUserOnly