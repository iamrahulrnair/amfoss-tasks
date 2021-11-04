import crypto from 'crypto';
import { Block } from '../interface/_block';

export function generateHash(data: any) {
  return crypto.createHash('sha1').update(JSON.stringify(data)).digest('hex');
}
