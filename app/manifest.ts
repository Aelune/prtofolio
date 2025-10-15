import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dawood Khan - Full Stack Developer Portfolio',
    short_name: 'Dwukn Portfolio',
    description: 'Full Stack Developer & Open Source Creator. Creator of Vanish, Hecate, and other projects.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a1b26',
    theme_color: '#1a1b26',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
