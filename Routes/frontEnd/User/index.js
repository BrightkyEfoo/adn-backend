import { Router } from 'express';
import { User } from '../../../Database/Sequelize.js';
import { login } from '../helpers/login.js';
import auth from '../../../auth/auth.js';
import { createUser } from '../helpers/createUser.js';
import { deleteUser } from '../helpers/deleteUser.js';
import { updateUser } from '../helpers/updateUser.js';
import { getAllUsers, getUser } from '../helpers/getUsers.js';
import { getAllDoctors } from '../helpers/Doctors/index.js';

export const UserRouter = Router();

UserRouter.post('/login', login);
UserRouter.route('/doctor').get(getAllDoctors)
UserRouter.use(auth);
UserRouter.route('/').get(getAllUsers).post(createUser);
UserRouter.route('/:id').delete(deleteUser).put(updateUser).get(getUser);

