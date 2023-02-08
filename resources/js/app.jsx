import React from "react";
import { createRoot} from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
		const container = el;
		const root = createRoot(container);
		root.render(<App {...props} />);
    },
});