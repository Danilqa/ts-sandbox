import type { IncomingMessage, ServerResponse } from 'node:http';
import { usersDb } from '../../db';

export default async function getUser(_: IncomingMessage, res: ServerResponse) {
  res.setHeader('Content-Type', 'application/json');
  const users = Array.from(usersDb.values());
  res.end(JSON.stringify(users));
}
