import { Express } from "express";

// import All the Controllers
import {createUser,getAllUsers,getUserInfoyID} from '../controllers/user.controller.js'

const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/').post(createUser);
router.route('/:id').get(getUserInfoyID);


export default router;