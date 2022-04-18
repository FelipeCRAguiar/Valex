import { Router } from "express";
import newCardSchema from "../schemas/newCardSchema.js"
import * as cardController from "../controllers/cardController.js";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware.js";
import validateApiKey from "../middlewares/validateAPIKeyMiddleware";

const cardRouter: Router = Router()

cardRouter.post('/cards', validateApiKey, validateSchemaMiddleware(newCardSchema), cardController.createNewCard)

export default cardRouter