import '../css/app.css'

import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { InertiaProgress } from '@inertiajs/progress'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

const appName =
    window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel'

if (typeof appName != 'undefined') {
    createInertiaApp({
        title: (title) => `${title} - ${appName}`,
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.tsx`,
                import.meta.glob('./Pages/**/*.tsx')
            ),
        setup({ el, App, props }) {
            return createRoot(el).render(<App {...props} />)
        },
    })
}

InertiaProgress.init({ color: '#4B5563' })
