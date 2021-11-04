export interface Block {
  index: number;
  timeStamp: string;
  transactions: any;
  hash: string;
  prevHash: string | null;
}
