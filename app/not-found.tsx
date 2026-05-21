import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="flex items-center justify-center text-center px-4"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, var(--marlot) 0%, var(--maroon) 100%)",
      }}
    >
      <div className="relative z-10">
        {/* TVK Logo */}
        <div
          className="flex items-center justify-center rounded-sm mb-8 mx-auto"
          style={{
            width: 48,
            height: 48,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,202,0,0.3)",
          }}
        >
          <span className="font-teko font-bold text-2xl" style={{ color: "var(--manjal)" }}>
            TVK
          </span>
        </div>

        {/* 404 */}
        <h1
          className="font-teko font-bold leading-none mb-4"
          style={{
            fontSize: "clamp(6rem, 15vw, 12rem)",
            color: "var(--manjal)",
          }}
        >
          404
        </h1>

        {/* Tamil text */}
        <p
          className="font-tamil text-lg mb-2"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          இந்த பக்கம் கிடைக்கவில்லை
        </p>

        {/* English text */}
        <p
          className="font-teko text-xl tracking-wider uppercase mb-8"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Page not found
        </p>

        {/* Back to home */}
        <Link href="/" className="btn-gold no-underline">
          BACK TO HOME
        </Link>
      </div>
    </main>
  );
}
