import QRCode from 'qrcode'

/** Render a QR data URL with quiet-zone margin baked in. */
export async function qrDataUrl(text: string, width = 480) {
  try {
    return await QRCode.toDataURL(text, {
      width,
      margin: 3,
      color: { dark: '#1a1c1c', light: '#ffffff' },
    })
  }
  catch {
    return ''
  }
}

/** Download a vCard string as a .vcf file. */
export function saveVcardFile(name: string, vcard: string) {
  const blob = new Blob([vcard], { type: 'text/vcard' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = name
  a.click()
  URL.revokeObjectURL(a.href)
}

const shared = ref(false)

/** Web Share API with clipboard fallback. Returns a readable state. */
export function useShareCard() {
  async function share(title: string, text: string) {
    const url = window.location.href
    try {
      if (navigator.share) await navigator.share({ title, text, url })
      else await navigator.clipboard.writeText(url)
    }
    catch {
      try {
        await navigator.clipboard.writeText(url)
      }
      catch { /* clipboard unavailable */ }
    }
    shared.value = true
    setTimeout(() => {
      shared.value = false
    }, 2000)
  }
  return { shared: readonly(shared), share }
}
