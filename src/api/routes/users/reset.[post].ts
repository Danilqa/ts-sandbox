import type { IncomingMessage, ServerResponse } from 'node:http';
import { reset } from '../../db';

export default async function resetUsers(
  _: IncomingMessage,
  res: ServerResponse
) {
  reset();
  res.end();
}
