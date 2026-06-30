export const WHATSAPP_NUMBER = '60103268811'

export function buildWhatsAppInquiryUrl(residenceName: string) {
  const label = `${residenceName.toUpperCase()} RESIDENCE`
  const text = encodeURIComponent(
    `Hi! I came across the *${label}* room on your website and would like to ask if it's currently available. Could you also let me know the latest rental rate? Thank you!`,
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}
