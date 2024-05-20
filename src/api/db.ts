// eslint-disable-next-line import/no-mutable-exports
export let usersDb = new Map(
  [
    {
      id: 'b5a9d9e2-1b43-4b45-9288-2e4eac61d5f4',
      gender: 'MALE',
      firstName: 'John',
      lastName: 'Doe',
      age: 28
    },
    {
      id: '3f48bce5-9c6d-4b65-9894-3d55ef074e22',
      gender: 'FEMALE',
      firstName: 'Jane',
      lastName: 'Smith',
      age: 34
    },
    {
      id: '91e69c8b-6b1b-4a8d-84e2-ecb5ad474601',
      gender: 'MALE',
      firstName: 'Michael',
      lastName: 'Johnson',
      age: 45
    },
    {
      id: 'ec9bcd61-4a95-45c2-9c3e-7086b1c7dbf1',
      gender: 'FEMALE',
      firstName: 'Emily',
      lastName: 'Davis',
      age: 22
    },
    {
      id: '62e3a9df-1f7d-4dd6-bbdf-01ed9dbcb05d',
      gender: 'MALE',
      firstName: 'David',
      lastName: 'Martinez',
      age: 30
    },
    {
      id: 'a0cfc9c5-7b3f-41d5-9e54-87bde041c0a5',
      gender: 'FEMALE',
      firstName: 'Sophia',
      lastName: 'Garcia',
      age: 29
    },
    {
      id: 'f5a0c5e2-1f7a-4858-83d8-8ef58b30c3b4',
      gender: 'MALE',
      firstName: 'James',
      lastName: 'Brown',
      age: 38
    },
    {
      id: '9f7b0d92-3cfc-4d43-93d8-2ed9ecb60e3e',
      gender: 'FEMALE',
      firstName: 'Olivia',
      lastName: 'Wilson',
      age: 26
    },
    {
      id: '5b6d1f7d-1b8f-4e39-a85b-4e7b0f7d9d2f',
      gender: 'MALE',
      firstName: 'Robert',
      lastName: 'Lee',
      age: 41
    },
    {
      id: '7e2d5c3b-5f7c-47b2-b5b8-2b6b0d9c7c8f',
      gender: 'FEMALE',
      firstName: 'Isabella',
      lastName: 'Harris',
      age: 32
    }
  ].map((user) => [user.id, user])
);

const originalDb = new Map(usersDb);

export function reset() {
  usersDb = new Map(originalDb);
}
