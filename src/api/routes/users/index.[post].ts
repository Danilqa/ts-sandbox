import type { IncomingMessage, ServerResponse } from 'node:http';
import { randomUUID } from 'node:crypto';

import { usersDb } from '../../db';
import { parseJson } from '../../utils/server.utils';
import { User } from '../../../entities/user';

export default async function getUser(
  req: IncomingMessage,
  res: ServerResponse
) {
  const newUser = await parseJson<User>(req);
  const id = randomUUID();
  usersDb.set(id, { ...newUser, id });

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(newUser));
}
