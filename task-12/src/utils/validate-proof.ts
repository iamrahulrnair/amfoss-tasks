import { generateHash } from './create-hash';
import { CHECK_FOR_HASH } from '..';

export function validateProof(proof: number) {
  let guessHash = generateHash(proof);
  console.log('HASH: ', guessHash);
  return guessHash == CHECK_FOR_HASH;
}
