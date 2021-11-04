import { BlockChain } from '../blockchain/_blockchain';
import { proofOfWork } from '../index';
import { CHECK_FOR_PROOF } from '../index';

export function Addblocks(blockchain: BlockChain) {
  if (proofOfWork() == CHECK_FOR_PROOF) {
    blockchain.addNewTransaction({
      sender: 'rohit',
      receipient: 'akshay',
      amount: 2,
    });
    blockchain.addNewTransaction({
      sender: 'rohit',
      receipient: 'akshay',
      amount: 2,
    });
    blockchain.addNewTransaction({
      sender: 'rohit',
      receipient: 'akshay',
      amount: 2,
    });
    blockchain.addNewTransaction({
      sender: 'rohit',
      receipient: 'akshay',
      amount: 2,
    });
    let prevHash = blockchain.lastBlock() ? blockchain.lastBlock().hash : null;
    blockchain.addNewBlock(prevHash);
  }
  if (proofOfWork() == CHECK_FOR_PROOF) {
    blockchain.addNewTransaction({
      sender: 'rohit',
      receipient: 'akshay',
      amount: 2,
    });
    blockchain.addNewTransaction({
      sender: 'rohit',
      receipient: 'akshay',
      amount: 2,
    });
    blockchain.addNewTransaction({
      sender: 'rohit',
      receipient: 'akshay',
      amount: 2,
    });
    blockchain.addNewTransaction({
      sender: 'rohit',
      receipient: 'akshay',
      amount: 2,
    });
    let prevHash = blockchain.lastBlock() ? blockchain.lastBlock().hash : null;
    blockchain.addNewBlock(prevHash);
  }
}
