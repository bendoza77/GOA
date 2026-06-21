import Navbar from "./Navbar";
import Footer from "./Footer";

/** App chrome wrapper: Navbar + page content + Footer. */
export default function PageShell({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
