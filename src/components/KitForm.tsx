/**
 * Kit email signup form container.
 * The Kit script is loaded globally in index.html and will
 * find and populate any div with the matching data-uid.
 */

const KIT_UID = "05b3af48cf";

interface KitFormProps {
  className?: string;
}

export function KitForm({ className }: KitFormProps) {
  return <div data-uid={KIT_UID} className={className} />;
}
