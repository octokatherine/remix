import { Form, json, redirect, useLoaderData } from "remix";
import type { ActionFunction } from "remix";
import { getStripeSession, getDomainUrl } from "~/utils/stripe.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const stripeRedirectUrl = await getStripeSession(
    process.env.PRICE_ID as string,
    getDomainUrl(request)
  );
  return redirect(stripeRedirectUrl);
};

export default function Buy() {
  return (
    <Form method="post">
      <button type="submit">buy</button>
    </Form>
  );
}
