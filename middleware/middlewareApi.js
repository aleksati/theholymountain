import { check, validationResult } from "express-validator";
import nextConnect from "next-connect";

// validates the incoming request before it's procced by the API
function initValidation(validations) {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);

    if (errors.isEmpty()) return next();

    const err = [];
    errors.array().map(error => err.push(error.msg));
    throw new Error(`Error while validating -> ${err}`);
  };
}

// to use inside nextConnect().use() functions in the API
const patch = middleware => {
  return nextConnect().put(middleware);
};

const post = middleware => {
  return nextConnect().post(middleware);
};

const get = middleware => {
  return nextConnect().get(middleware);
};

const del = middleware => {
  return nextConnect().del(middleware);
};

export { patch, post, get, del, initValidation, check };
