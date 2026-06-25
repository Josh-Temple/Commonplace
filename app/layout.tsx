import type { Metadata, Viewport } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Lumen",
  description: "A personal knowledge-base viewer for linked reading notes.",
  manifest: "/manifest.webmanifest",
  applicationName: "Lumen",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Lumen",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f3e8",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const value = window.localStorage.getItem("lumen-font-size");
                document.documentElement.dataset.fontSize = ["compact", "standard", "large"].includes(value) ? value : "compact";
              } catch {
                document.documentElement.dataset.fontSize = "compact";
              }
            })();`,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              if (!("serviceWorker" in navigator)) {
                return;
              }

              window.addEventListener("load", () => {
                navigator.serviceWorker.register("/sw.js");
              });
            })();`,
          }}
        />
        <div className="app-shell">{children}</div>
      </body>
    </html>
  );
}
