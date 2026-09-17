import styles from "./page.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

type ApiHello = {
  message: string;
  service: string;
  timestamp: string;
};

type ApiInfo = {
  name: string;
  version: string;
  framework: string;
  endpoints: string[];
};

async function fetchJson<T>(path = ""): Promise<T | null> {
  try {
    const response = await fetch(`${API_URL}${path}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  }
}

export default async function Home() {
  const [hello, info] = await Promise.all([
    fetchJson<ApiHello>(),
    fetchJson<ApiInfo>("/info"),
  ]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>NestJS + Next.js</p>
        <h1>Testing stack</h1>
        <p className={styles.lead}>
          Simple full-stack starter: Nest API on port 3001, Next.js UI on port
          3000.
        </p>

        <section className={styles.card}>
          <h2>API response</h2>
          {hello ? (
            <pre>{JSON.stringify(hello, null, 2)}</pre>
          ) : (
            <p className={styles.error}>
              Could not reach the Nest API at {API_URL}. Start it with{" "}
              <code>npm run start:api</code>.
            </p>
          )}
        </section>

        <section className={styles.card}>
          <h2>API info</h2>
          {info ? (
            <pre>{JSON.stringify(info, null, 2)}</pre>
          ) : (
            <p className={styles.error}>
              Could not load <code>/info</code> from the Nest API.
            </p>
          )}
        </section>
      </main>
    </div>
  );
}
