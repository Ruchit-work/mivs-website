import { portfolioMetadata } from "./metadata";

export const metadata = portfolioMetadata;

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}