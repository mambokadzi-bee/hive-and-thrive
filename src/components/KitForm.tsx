import kitFormHtml from "../kit-form.html?raw";

interface KitFormProps {
  className?: string;
}

/**
 * Kit email signup form — uses Kit's exact HTML embed rendered inline.
 * ck.5.js is loaded in index.html and handles form submission to Kit's API.
 */
export function KitForm({ className }: KitFormProps) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: kitFormHtml }}
    />
  );
}
