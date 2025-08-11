import { Router } from "express";
import { addUser, getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/user.controller.js';
const router = Router();
router.route('/').get((req, res) => {
    res.send('Welcome to User Management Server');
});
router.route('/adduser').post(addUser);
router.route('/viewall').get(getAllUsers);
router.route('/view/:id').get(getUserById);
router.route('/update/:id').put(updateUser);
router.route('/delete/:id').delete(deleteUser);
export {router};