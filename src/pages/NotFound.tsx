import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center max-w-lg mx-4 py-32">
        <div className="w-24 h-24 hex-clip bg-honey/20 flex items-center justify-center mx-auto mb-8">
          <span className="font-display text-4xl font-bold text-honey-dark">404</span>
        </div>
        <h1 className="font-display text-4xl font-bold text-navy mb-4">Lost in the Hive?</h1>
        <p className="text-charcoal/60 text-lg mb-8 leading-relaxed">
          This page doesn't exist. But the rest of the hive is full of good things.
        </p>
        <Link href="/">
          <Button className="bg-honey hover:bg-honey-dark text-navy font-semibold px-8 py-5 text-base">
            Back to the Hive
          </Button>
        </Link>
      </div>
    </div>
  );
}
