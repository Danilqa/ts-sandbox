import type { IncomingMessage, ServerResponse } from 'node:http';
import { usersDb } from '../../db';

interface RouteParams {
  id: string;
}

export default function getUser(
  _: IncomingMessage,
  res: ServerResponse,
  { id }: RouteParams
) {
  res.end(JSON.stringify(usersDb.get(id)));
}
