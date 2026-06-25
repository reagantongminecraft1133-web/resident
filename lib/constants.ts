export const WHATSAPP_NUMBER = '60000000000'

export function buildWhatsAppInquiryUrl(residenceName: string) {
  const label = `${residenceName.toUpperCase()} RESIDENCE`
  const text = encodeURIComponent(
    `你好，我在网站上看到了【${label}】的房间，想咨询一下近期的空房和租金情况！`,
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}
