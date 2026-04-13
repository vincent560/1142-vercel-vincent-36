export const dynamic = 'force-dynamic';

import { prisma } from '@src/lib/prisma';

const UsersPage = async () => {
  const users = await prisma.user.findMany();

  return (
    <div>
      <h2>Users</h2>
      {users.length === 0 ? (
        <p>No users found...</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersPage;