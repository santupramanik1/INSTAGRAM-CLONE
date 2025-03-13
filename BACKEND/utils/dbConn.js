import mongoose from "mongoose"


export const connDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongoDB Connected Sucessfully")
    } catch (error) {
        console.log("Failed to Connect with DB")
    }
}

