import Link from "next/link";

export default function Home() {
  return (
    <main>

      <header className="topbar">

        <div className="brand">

          <img
            src="/badge.png"
            alt="Woodlands Academy badge"
          />

          <span>
            Woodlands Academy
          </span>

        </div>

        <Link
          className="button secondary"
          href="/login"
        >
          Sign in
        </Link>

      </header>


      <section className="hero">

        <div className="hero-card">

          <div className="badge-wrap">

            <img
              src="/badge.png"
              alt="Woodlands Academy"
            />

          </div>


          <p className="eyebrow">
            WOODLANDS ACADEMY
          </p>


          <h1>
            Learn.
            <br />
            Connect.
            <br />
            Achieve.
          </h1>


          <p className="hero-text">
            Welcome to the Woodlands Academy online portal.
            Access your classes, assignments, school updates,
            resources and AI-powered learning tools all in one place.
          </p>


          <div className="actions">

            <Link
              className="button primary"
              href="/login"
            >
              Get started
            </Link>


            <Link
              className="button ghost"
              href="/student"
            >
              Student portal
            </Link>


            <Link
              className="button ghost"
              href="/teacher"
            >
              Teacher portal
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
