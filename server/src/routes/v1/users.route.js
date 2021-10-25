import express from 'express';
import uploadUtils from '../../utils/upload-utils.js';
import { addressUserAdd, addressUserDelete, addressUserUpdate, createUser, getUser, getUsers, updateUser } from '../../controllers/users.controller.js';

const router = express.Router();
const allowedMimes = ['image/jpeg', 'image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];
const upload = uploadUtils.multerUpload('/users/', allowedMimes);


router.route('/')
  .get(getUsers)
  .post(
    upload.single('image'),
    uploadUtils.handleFilePath('image'),
    createUser
  );

/* identity is _id or slug */
router.route('/:identity')
  .get(getUser)
  .patch(
    upload.single('image'),
    uploadUtils.handleFilePath('image'),
    updateUser
  );

router.route('/:identity/address')
  .post(addressUserAdd);

router.route('/:identity/address/:identityAddress')
  .delete(addressUserDelete)
  .patch(addressUserUpdate);


export default router;
