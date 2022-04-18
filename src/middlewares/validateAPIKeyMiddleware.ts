import { NextFunction, Request, Response } from "express";
import { findByApiKey } from "../repositories/companyRepository.js";
import * as errorUtils from "../utils/errorUtils.js";

export default async function validateAPIKey( req: Request, res: Response, next: NextFunction) {
  const apiKey = req.headers["x-api-key"] as string

  if(!apiKey) {
    throw errorUtils.badRequest()
  }

  const company = findByApiKey(apiKey)

  res.locals.company = company

  next()
}