import * as cardRepository from "../repositories/cardRepository.js"
import * as employeeServices from "./employeeServices.js"
import * as hashUtils from "../utils/hashUtils.js";
import * as cardUtils from "../utils/cardUtils.js"
import * as errorUtils from "../utils/errorUtils.js"

async function checkUniqueCardTypeByEmployee(employeeId: number, cardType: cardRepository.TransactionTypes) {

  const cardData = await cardRepository.findByTypeAndEmployeeId(cardType, employeeId)

  if (cardData) {
    throw errorUtils.conflict();
  }
}

export async function createNewCard(employeeId: number, cardType: cardRepository.TransactionTypes) {

  const employee = await employeeServices.findEmployeeById(employeeId)

  await checkUniqueCardTypeByEmployee(employeeId, cardType)

  const cardData = cardUtils.generateCardInformation(employee.id, employee.fullName, cardType)

  const cardDataReturn = {
    cardholderName: cardData.cardholderName,
    number: cardData.number,
    securityCode: cardData.securityCode,
    expirationDate: cardData.expirationDate
  }

  cardData.securityCode = hashUtils.createHashData(cardData.securityCode)

  await cardRepository.insert(cardData)

  return cardDataReturn

}