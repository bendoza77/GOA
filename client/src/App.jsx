import PageShell from "./components/layout/PageShell";
import ScrollToTop from "./components/layout/ScrollToTop";
import DocumentTitle from "./components/layout/DocumentTitle";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <DocumentTitle />
      <ScrollToTop />
      <PageShell>
        <AppRoutes />
      </PageShell>
    </>
  );
}
