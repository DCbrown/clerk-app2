"use client";

import { useState } from "react";

export default function ClientDashboard(props) {
  const [test, setTest] = useState("testing");

  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
      <p className="mb-5">Welcome to the dashboard!</p>
      <p>{props.user}</p>
    </>
  );
}
