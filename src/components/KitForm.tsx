import { useEffect } from "react";

const KIT_UID = "05b3af48cf";
const KIT_SRC = `https://hive-thrive.kit.com/${KIT_UID}/index.js`;

interface KitFormProps {
  className?: string;
}

/**
 * Renders the Kit (ConvertKit) embedded signup form.
 * Renders a div with data-uid first, then loads the Kit script
 * so Kit finds the target container and fills it with the form.
 */
export function KitForm({ className }: KitFormProps) {
  useEffect(() => {
    // Only inject once
    if (document.querySelector(`script[data-uid="${KIT_UID}"]`)) return;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", KIT_UID);
    script.src = KIT_SRC;
    document.head.appendChild(script);
  }, []);

  return <div data-uid={KIT_UID} className={className} />;
}
