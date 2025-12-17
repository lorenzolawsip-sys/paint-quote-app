export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", padding: 30 }}>
      <h1>Instant Paint Quote</h1>
      <p>Create paint estimates in minutes.</p>

      <a href="/calculator">
        <button style={{ padding: 12, fontSize: 16 }}>
          Start a Quote
        </button>
      </a>
    </main>
  );
}
