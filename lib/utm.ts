export function withUtm(
  url: string,
  source: string,
  medium: string = 'referral',
  campaign: string = 'portfolio'
): string {
  if (!url) return url
  try {
    const u = new URL(url)
    u.searchParams.set('utm_source', source)
    u.searchParams.set('utm_medium', medium)
    u.searchParams.set('utm_campaign', campaign)
    return u.toString()
  } catch {
    return url
  }
}
