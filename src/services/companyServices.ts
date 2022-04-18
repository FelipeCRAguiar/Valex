import * as companyRepository from "../repositories/companyRepository.js";
import * as errorUtils from "../utils/errorUtils.js";

export async function findCompanyByKey(apiKey: string) {
  
  const company = await companyRepository.findByApiKey(apiKey)

  if(!company) {
    throw errorUtils.unauthorized()
  }

  return company
}