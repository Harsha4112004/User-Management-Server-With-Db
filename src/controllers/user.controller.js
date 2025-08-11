import { User } from "../models/user.models.js";
export const addUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = new User({ name, email });
        await newUser.save();
        res.status(201).json({ message: "User added successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error adding user", error: error.message });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('id name email'); 
        const formattedUsers = users.map(user => ({
            id: user._id,
            name: user.name,
            email: user.email
        }));
        res.status(200).json(formattedUsers);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({id:user._id,name:user.name,email:user.email});
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error: error.message });
    }
};
export const updateUser = async (req, res) => {
    try {
        const {name,email}= req.body
        const user = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set:{
                        name,
                        email
                    }
                },{
                    new:true,
                }).select("_id name email")
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }   
        res.status(200).json({ message: "User updated successfully", user });
    }   
    catch (error) {
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }   
};
        