
import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    "name": "Alex Rayer Portfolio Website ", 
    "short_name": "Alex Rayer",
    "start_url": "/",
    "description": "Welcome to my portfolio website. It is made with Nextjs and deplyed through vercel",
    "display": "standalone",
    "background_color": "#000",
    "theme_color": "rgba(113, 47, 255, 0.24);",
    "orientation": "portrait",
    "icons": [
        {
            "src": "public/glaxy.png",
            "type": "image/png",
            "sizes": "144x144"
        },
    ],
  }
}