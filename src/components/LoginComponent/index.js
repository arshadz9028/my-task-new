"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/utils/api";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = await loginUser(email, password);
    const role = data?.user?.role;
      console.log("User Role:", role); // Debugging line
    if (role === "Member") {
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/events");
    } else {
      alert("Upgrade Your Account");
      router.push("/login");
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Login</button>
    </form>
  );
}