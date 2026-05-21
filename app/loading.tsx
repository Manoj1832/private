export default function Loading() {
  return (
    <main
      className="flex flex-col items-center justify-center"
      style={{
        minHeight: "100vh",
        background: "var(--white)",
      }}
    >
      {/* VB Monogram */}
      <span
        className="font-teko font-bold loading-monogram"
        style={{
          fontSize: "8rem",
          color: "var(--maroon)",
        }}
      >
        VB
      </span>

      {/* Loading text */}
      <p
        className="font-teko text-sm tracking-widest uppercase mt-4"
        style={{ color: "var(--gray)" }}
      >
        Loading...
      </p>
    </main>
  );
}
