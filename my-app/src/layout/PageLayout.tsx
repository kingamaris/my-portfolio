import Header from "./Header";

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <Header />

      <div>
        <main id="main">{children}</main>
      </div>

      {/* <VerslunFooter {...footer} /> */}
    </div>
  );
}

type PageLayoutProps = {
  children: React.ReactNode;
};
