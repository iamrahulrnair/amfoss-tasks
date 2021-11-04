import crypto from 'crypto';
import { generateHash } from '../utils/create-hash';

import { Block } from '../interface/_block';
import { Transaction } from '../interface/_transcation';

export class BlockChain {
  private current_transaction: Array<Transaction>;
  private chain: Array<Block>;
  constructor() {
    this.current_transaction = [];
    this.chain = [];
  }
  get chain_of_blocks() {
    return this.chain;
  }
  get check_transactions() {
    return this.current_transaction;
  }
  addNewBlock(prevHash: string | null): Block {
    //   @ts-ignore
    let block: Block = {
      index: this.chain.length + 1,
      timeStamp: new Date().toISOString(),
      transactions: this.current_transaction,
      prevHash,
    };
    block.hash = generateHash(block);
    this.chain.push(block);
    this.current_transaction = [];
    return block;
  }
  addNewTransaction({ sender, receipient, amount }: Transaction) {
    this.current_transaction.push({
      sender,
      receipient,
      amount,
    });
  }
  lastBlock() {
    return this.chain.slice(-1)[0];
  }
  isEmpty(): boolean {
    return this.chain.length == 0;
  }
}
