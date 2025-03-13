import User from "../models/userModel.js"
import bcrypt from "bcryptjs"

// *********** Registration ******************
export const register = async (req, res) => {
    try {
        const { userName, email, password } = req.body
        // if the user does not provide any login credentials, they must fill in the required fields before proceeding.
        if (!userName || !email || !password) {
            return res.status(401), json({
                message: "Something is missing please check",
                sucess: false
            })
        }

        // Check the email id is already exist or not
        const user = await User.findOne({ email })
        if (user) {
            return res.status(401), json({
                message: "Try with Different Email id",
                sucess: false
            })
        }

        // Now create user
        const hashedPassword = bcrypt.hash(password, 10)
        await User.create({
            userName,
            email,
            password: hashedPassword
        })
        return res.status(201), json({
            message: "Account Created Sucessfully",
            sucess: true
        })
    }
    catch (error) {
        console.log("Error While Register ")
    }
}

//  ********* Login **************
export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        // if the user does not provide any login credentials, they must fill in the required fields before proceeding.
        if (!email || !password) {
            return res.status(401), json({
                message: "Something is missing please check",
                sucess: false
            })
        }

        // Check if the valid user has account or not
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(401), json({
                message: "Invalid Email or Password",
                sucess: false
            })
        }

        // For Password Matching
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            return res.status(401), json({
                message: "Invalid Email or Password",
                sucess: false
            })
        }
    }
    catch (error) {
        console.log("Error While Login ")
    }
}