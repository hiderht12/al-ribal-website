/**
 * The site's single order/inquiry channel. Every "order" or "get a quote"
 * action goes straight to WhatsApp instead of a contact form — there is no
 * form to keep in sync with this number.
 */
export const WHATSAPP_NUMBER = "964772221258";

export const DEFAULT_WHATSAPP_MESSAGE =
  "مرحباً، أرغب بالاستفسار عن خدماتكم في تركيب كاميرات المراقبة.";

export function buildWhatsAppLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
