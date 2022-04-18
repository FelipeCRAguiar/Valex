import bcrypt from 'bcrypt';

export function createHashData(sensibleData: string): string {

  const hash = bcrypt.hashSync(sensibleData, 10)

  return hash

}