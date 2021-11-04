import { BlockChain } from './blockchain/_blockchain';
import { generateHash } from '../src/utils/create-hash';
import { Addblocks } from '../src/utils/add-block';
import { validateProof } from './utils/validate-proof';

export const CHECK_FOR_PROOF = 1000;
export const CHECK_FOR_HASH = generateHash(CHECK_FOR_PROOF);
export function proofOfWork() {
  let proof = 0;
  while (true) {
    if (!validateProof(proof)) {
      proof++;
    } else {
      break;
    }
  }
  return proof;
}
const blockchain = new BlockChain();
Addblocks(blockchain);

/*
@TODO: check Transactions for a block

blockchain.chain_of_blocks[0].transactions.map((el: any) => {
    console.log(el);
});

@TODO: check chain of blocks

blockchain.chain_of_blocks.map((el: any) => {
    console.log(el);
});

*/
