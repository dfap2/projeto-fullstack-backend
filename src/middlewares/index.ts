import handleError from "./handdleError.middleware";
import verifyToken from "./verifyToken.middleware";
import validateBody from "./validateBody.middleware";
import uniqueUserEmail from "./uniqueUserEmail.middleware";
import uniqueCpf from "./uniqueCpf.middleware";
import uniquePhoneNumber from "./uniquePhoneNumber.middleware";
import userIdExists from "./userIdExists.middleware";
import accountOwner from "./accountOwner.middleware";
import commentOwner from "./commentOwner.middleware";
import isAnouncer from "./isAnouncer.middleware";
import anouncementExists from "./anouncementExists.middleware";

export default {
    handleError,
    verifyToken,
    validateBody,
    uniqueUserEmail,
    uniqueCpf,
    uniquePhoneNumber,
    userIdExists,
    accountOwner,
    commentOwner,
    isAnouncer,
    anouncementExists,
};
