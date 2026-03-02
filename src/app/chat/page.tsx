import { redirect } from "next/navigation";

/**
 * Redirect /chat to /keshet-redemption for backwards compatibility.
 */
export default function ChatRedirectPage() {
  redirect("/keshet-redemption");
}
