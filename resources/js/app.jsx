import React from "react";
import { createRoot} from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import Layout from "./components/Layout";

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ).then(module => {
            const Page = module.default;
            return props => (
                <Layout>
                    <Page {...props}/>
                </Layout>
            )
        }),
    setup({ el, App, props }) {
		const container = el;
		const root = createRoot(container);
		root.render(<App {...props} />);
    },
});