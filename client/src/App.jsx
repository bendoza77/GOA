import PageShell from "./components/layout/PageShell";
import ScrollToTop from "./components/layout/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <PageShell>
        <AppRoutes />
      </PageShell>
    </>
  );
}
