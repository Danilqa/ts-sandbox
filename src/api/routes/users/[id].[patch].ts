import type { IncomingMessage, ServerResponse } from 'node:http';
import { usersDb } from '../../db';
import { parseJson } from '../../utils/server.utils';

interface RouteParams {
  id: string;
}

export default async function updateUser(
  req: IncomingMessage,
  res: ServerResponse,
  { id }: RouteParams
) {
  const newFields = await parseJson(req);
  const currentUser = usersDb.get(id);
  usersDb.set(id, { ...currentUser, ...newFields });

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(usersDb.get(id)));
}
