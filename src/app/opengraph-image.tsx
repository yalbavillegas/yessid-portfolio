import { ImageResponse } from "next/og";

export const alt =
  "Yessid Alba — Software Engineer · YALBA LABS";

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
          background: "#000000",
          color: "#ffffff",
          padding: "72px 80px",
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
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "8px",
            }}
          >
            YESSID ALBA
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "6px",
              color: "#a1a1aa",
            }}
          >
            YALBA LABS
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 900,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 20,
              textTransform: "uppercase",
              letterSpacing: "7px",
              color: "#71717a",
              marginBottom: 28,
            }}
          >
            SOFTWARE ENGINEER · SYSTEMS ANALYST
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-4px",
            }}
          >
            <div style={{ display: "flex" }}>
              Construyo software
            </div>

            <div
              style={{
                display: "flex",
                color: "#71717a",
              }}
            >
              con propósito.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 20,
            color: "#52525b",
          }}
        >
          iOS · macOS · Android · Web · Python · Flutter
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
