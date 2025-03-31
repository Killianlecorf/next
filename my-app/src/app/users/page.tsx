import React, {Suspense} from "react";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchData() {
  await sleep(3000);
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
}

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersList = async () => {
  const users: User[] = await fetchData();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des Utilisateurs</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="bg-gray-100 p-4 rounded shadow-md">
            <h2 className="font-semibold text-black">{user.name}</h2>
            <p className="font-semibold text-black">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

function Spinner() {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="w-6 h-6 border-4 border-t-4 border-gray-300 rounded-full animate-spin"></div>
      <span>Chargement...</span>
    </div>
  );
}

export default function UsersPage() {
  return (
    <div className="p-4">
      <Suspense fallback={<Spinner />}>
        <UsersList />
      </Suspense>
    </div>
  );
}
