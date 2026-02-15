import "./globals.css";
import QueryProvider from "../providers/QueryProvider";
import AuthInitializer from "../components/AuthInitializer";
import TokenExpirationHandler from "../components/TokenExpirationHandler";
import ClientAppLayout from "../components/ClientAppLayout";

export const metadata = {
  title: "CoDiYoung",
  description: "Together, We grow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <AuthInitializer />
          <TokenExpirationHandler />
          <ClientAppLayout>{children}</ClientAppLayout>
        </QueryProvider>
      </body>
    </html>
  );
}
