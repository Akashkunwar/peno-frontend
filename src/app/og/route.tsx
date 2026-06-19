import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") || "PENO";
  const subtitle = searchParams.get("subtitle") || "Premium Corporate Gifting, Marketing & Technology";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #062617 0%, #0C3824 60%, #165435 100%)",
          padding: 80,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 20% 30%, rgba(184, 155, 114, 0.18) 0%, transparent 55%), radial-gradient(ellipse at 85% 75%, rgba(184, 155, 114, 0.12) 0%, transparent 55%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 80,
            right: 80,
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(184, 155, 114, 0.4), transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 80,
            right: 80,
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(184, 155, 114, 0.4), transparent)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 48,
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 24,
              background: "linear-gradient(135deg, #0C3824, #062617)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
              border: "2px solid rgba(184, 155, 114, 0.3)",
            }}
          >
            <span style={{ fontSize: 64, color: "#F8F6F2", fontFamily: "Georgia, serif", fontWeight: 600 }}>P</span>
          </div>
        </div>
        <h1
          style={{
            fontSize: 84,
            fontFamily: "Georgia, serif",
            color: "#F8F6F2",
            margin: 0,
            textAlign: "center",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            zIndex: 1,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 32,
            fontFamily: "Inter, sans-serif",
            color: "rgba(248, 246, 242, 0.75)",
            marginTop: 32,
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.4,
            zIndex: 1,
          }}
        >
          {subtitle}
        </p>
        <div
          style={{
            position: "absolute",
            bottom: 48,
            display: "flex",
            alignItems: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          <span style={{ fontSize: 20, color: "#B89B72", fontFamily: "Inter, sans-serif", letterSpacing: "0.15em" }}>PENO.IN</span>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#B89B72" }} />
          <span style={{ fontSize: 20, color: "rgba(248, 246, 242, 0.6)", fontFamily: "Inter, sans-serif", letterSpacing: "0.1em" }}>INDIA</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
