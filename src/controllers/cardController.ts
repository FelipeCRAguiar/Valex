import { Response, Request } from "express";
import * as cardServices from "../services/cardServices.js";

export async function createNewCard(req: Request, res: Response) {
  const {employeeId, cardType} = req.body

  const card = await cardServices.createNewCard(employeeId, cardType)

  return res.status(201).send(card)
}