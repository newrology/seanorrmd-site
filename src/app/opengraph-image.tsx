import { ImageResponse } from "next/og";

export const alt = "Sean C. Orr, M.D., neurologist and physician entrepreneur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px 90px",
          background: "#1A1A2E",
          color: "#F8F7F4",
        }}
      >
        <div style={{ width: 96, height: 4, background: "#C9A84C", marginBottom: 40 }} />
        <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>Sean C. Orr, M.D.</div>
        <div style={{ fontSize: 34, color: "rgba(248,247,244,0.7)", marginTop: 28 }}>
          Neurologist. Co-founder and Chief Medical Officer, The Neurogenesis Project.
        </div>
        <div style={{ fontSize: 28, color: "#C9A84C", marginTop: 44 }}>seanorrmd.com</div>
      </div>
    ),
    size,
  );
}
