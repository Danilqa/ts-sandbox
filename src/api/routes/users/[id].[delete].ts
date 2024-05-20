import type { IncomingMessage, ServerResponse } from 'node:http';
import { usersDb } from '../../db';

interface RouteParams {
  id: string;
}

export default function removeUser(
  _: IncomingMessage,
  res: ServerResponse,
  { id }: RouteParams
) {
  usersDb.delete(id);
  res.end();
}
