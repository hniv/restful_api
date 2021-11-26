const { model } = require("mongoose")
const User = require("../models/User")


module.exports.GetAllUsers = (async (req, res) => {
    try {
        const users = await User.find()
        
        res.send(users)   
    } catch (error) {
        res.send({ message: error })
    }
})

module.exports.CreateUser = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        })
        await user.save()
        
        res.status(200).json({message: "Create success"})     
    } catch (error) {
        res.send({ message: error })
    }
}

module.exports.GetUser = async (req, res) => {
    try {     
        const user = await User.findById(req.params.id);
    
        res.send(user);
    } catch (error) {
        res.send({message: error})
    }
}

module.exports.UpdateUser = async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
          { _id: req.params.id },
          { $set: { name: req.body.name, age: req.body.age, email: req.body.email} }
        )
    
        res.send(updatedUser)     
    } catch (error) {
        res.send({ message: error })
    }
}

module.exports.DeleteUser = async (req, res) => {
    try {
        const deletedUser = await User.remove({ _id: req.params.id })
        
        res.send(deletedUser)
    } catch (error) {
        res.send({ message: error })
    }
    
}
