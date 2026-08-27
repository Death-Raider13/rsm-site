export const site = {
  name: 'ResolveSync Management',
  shortName: 'RSM',
  email: 'resolvesyncmanagement@gmail.com',
  phoneDisplay: '+234 812 167 8176',
  whatsappNumber: '2348121678176',
  location: 'Lagos, Nigeria',
}

export const defaultWhatsAppMessage =
  'Hi ResolveSync Management, I would like to discuss a project.'

export function whatsappUrl(message = defaultWhatsAppMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const navLinks = [
  { label: 'How we help', href: '#services' },
  { label: 'Get started', href: '#sprint' },
  { label: 'Our process', href: '#process' },
  { label: 'About Liana', href: '#founder' },
]
