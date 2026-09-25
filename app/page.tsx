import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Woodlands Academy</h1>

      <p>
        Welcome to the Woodlands Academy school portal.
      </p>

      <Link href="/login">
        Sign in
      </Link>
    </main>
  );
}
