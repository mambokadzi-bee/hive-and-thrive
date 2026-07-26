import { useEffect, useRef } from "react";

const KIT_UID = "05b3af48cf";
const KIT_SRC = `https://hive-thrive.kit.com/${KIT_UID}/index.js`;

interface KitFormProps {
  className?: string;
}

/**
 * Renders the Kit (ConvertKit) embedded signup form.
 * The script is injected into the container so Kit renders
 * the form inline at this location on the page.
 */
export function KitForm({ className }: KitFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Avoid duplicate scripts on re-render
    if (containerRef.current.querySelector(`script[data-uid="${KIT_UID}"]`)) return;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", KIT_UID);
    script.src = KIT_SRC;
    containerRef.current.appendChild(script);
  }, []);

  return <div ref={containerRef} className={className} />;
}
