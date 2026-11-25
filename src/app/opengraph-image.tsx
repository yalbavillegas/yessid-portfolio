import { ImageResponse } from "next/og";

export const alt =
  "Yessid Alba — Software Engineer & Technology Innovator · Yessid Alba Labs";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #050811 0%, #090e1c 55%, #0d1527 100%)",
          color: "#f8fafc",
          padding: "70px 80px",
          border: "1px solid rgba(212, 175, 55, 0.25)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: "7px",
                color: "#f8fafc",
              }}
            >
              YESSID ALBA
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: "6px",
                color: "#d4af37",
              }}
            >
              · LABS
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "4px",
              color: "#94a3b8",
            }}
          >
            YESSIDALBALABS.TECH
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 980,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 19,
              textTransform: "uppercase",
              letterSpacing: "6px",
              color: "#d4af37",
              marginBottom: 24,
            }}
          >
            SOFTWARE ENGINEER & TECHNOLOGY INNOVATOR
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 70,
              fontWeight: 700,
              lineHeight: 0.98,
              letterSpacing: "-3px",
            }}
          >
            <div style={{ display: "flex", color: "#f8fafc" }}>
              Engineering intelligent solutions.
            </div>

            <div
              style={{
                display: "flex",
                color: "#94a3b8",
                marginTop: 6,
              }}
            >
              Building software that matters.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(148, 163, 184, 0.18)",
            paddingTop: 26,
            fontSize: 19,
            color: "#94a3b8",
          }}
        >
          <div style={{ display: "flex" }}>
            Rust · Python · Swift · Kotlin · TypeScript · Flutter · SQLite ·
            Mach-O
          </div>

          <div
            style={{
              display: "flex",
              color: "#d4af37",
              fontSize: 16,
              letterSpacing: "4px",
            }}
          >
            YALBA LABS
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
