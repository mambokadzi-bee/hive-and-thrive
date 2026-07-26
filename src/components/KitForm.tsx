/**
 * Kit (ConvertKit) HTML embed form.
 * Uses Kit's HTML embed approach — direct POST to Kit's API,
 * handled by ck.5.js loaded in index.html.
 */

const FORM_ID = "9727847";
const KIT_UID = "05b3af48cf";

interface KitFormProps {
  className?: string;
}

const KIT_FORM_HTML = `
<form
  action="https://app.kit.com/forms/${FORM_ID}/subscriptions"
  class="seva-form formkit-form"
  method="post"
  data-sv-form="${FORM_ID}"
  data-uid="${KIT_UID}"
  data-format="inline"
  data-version="5"
>
  <div data-style="clean">
    <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
    <div data-element="fields" data-stacked="false" class="seva-fields formkit-fields">
      <div class="formkit-field">
        <input
          class="formkit-input"
          name="fields[first_name]"
          aria-label="First Name"
          placeholder="First Name"
          type="text"
          style="color: rgb(0,0,0); border-color: rgb(227,227,227); border-radius: 4px; font-weight: 400;"
        />
      </div>
      <div class="formkit-field">
        <input
          class="formkit-input"
          name="email_address"
          aria-label="Email Address"
          placeholder="Email Address"
          required
          type="email"
          style="color: rgb(0,0,0); border-color: rgb(227,227,227); border-radius: 4px; font-weight: 400;"
        />
      </div>
      <button
        data-element="submit"
        class="formkit-submit formkit-submit"
        style="color: rgb(255,255,255); background-color: rgb(22,119,190); border-radius: 4px; font-weight: 400;"
      >
        <div class="formkit-spinner">
          <div></div><div></div><div></div>
        </div>
        <span>Join the Hive</span>
      </button>
    </div>
    <div data-element="after-subscribe" class="formkit-after-subscribe">
      <h4 class="formkit-header">Success!</h4>
      <p>Now check your email to confirm your subscription.</p>
    </div>
  </div>
</form>
`;

export function KitForm({ className }: KitFormProps) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: KIT_FORM_HTML }}
    />
  );
}
