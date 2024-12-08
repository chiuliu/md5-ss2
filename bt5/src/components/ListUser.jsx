import React from "react";
import ItemUser from "./ItemUser";

export default function ListUser() {
  const users = [
    {
      id: 1,
      name: "Daniel Kristeen",
      age: "Past : teacher",
      email: "daniel@website.com",
      date: "15 Mar 1988",
      manage: ["Modulator", "Admin", "User", "Subscriber"],
    },
    {
      id: 2,
      name: "Daniel Kristeen 1",
      age: "Past : teacher",
      email: "daniel@website.com",
      date: "15 Mar 1988",
      manage: ["Modulator", "Admin", "User", "Subscriber"],
    },
    {
      id: 3,
      name: "Daniel Kristeen 2",
      age: "Past : teacher",
      email: "daniel@website.com",
      date: "15 Mar 1988",
      manage: ["Modulator", "Admin", "User", "Subscriber"],
    },
    {
      id: 4,
      name: "Daniel Kristeen 3",
      age: "Past : teacher",
      email: "daniel@website.com",
      date: "15 Mar 1988",
      manage: ["Modulator", "Admin", "User", "Subscriber"],
    },
    {
      id: 5,
      name: "Daniel Kristeen 4",
      age: "Past : teacher",
      email: "daniel@website.com",
      date: "15 Mar 1988",
      manage: ["Modulator", "Admin", "User", "Subscriber"],
    },
  ];
  return (
    <>
      {users.map((user) => (
        <ItemUser key={user.id} user={user} />
      ))}
    </>
  );
}
