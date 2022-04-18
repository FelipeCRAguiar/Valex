import * as employeeRepository from "../repositories/employeeRepository.js";
import * as errorUtils from "../utils/errorUtils.js";

export async function findEmployeeById(employeeId: number) {

  const employeeData: employeeRepository.Employee = await employeeRepository.findById(employeeId)

  if (!employeeData) {
    throw errorUtils.notFound;
  }

  return employeeData
}