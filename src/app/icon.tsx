import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          fontWeight: 900,
          background: "#141414",
          color: "#FFFBF6",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          fontFamily: "sans-serif",
          letterSpacing: "-1px",
        }}
      >
        NS
      </div>
    ),
    {
      ...size,
    }
  );
}
