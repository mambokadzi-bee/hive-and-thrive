import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import About from "./pages/About";
import Honeycomb from "./pages/Honeycomb";
import Collections from "./pages/Collections";
import JoinSwarm from "./pages/JoinSwarm";
import QueensCircle from "./pages/QueensCircle";
import Contact from "./pages/Contact";
import TheBook from "./pages/TheBook";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/honeycomb" component={Honeycomb} />
        <Route path="/collections" component={Collections} />
        <Route path="/join" component={JoinSwarm} />
        <Route path="/the-book" component={TheBook} />
        <Route path="/queens-circle" component={QueensCircle} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default function App() {
  return (
    <TooltipProvider>
      <Toaster richColors position="top-center" />
      <Router />
    </TooltipProvider>
  );
}
