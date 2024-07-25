import { UsernamePasswordAuthJSProvider as UsernamePasswordAuthJSProvider, TinaUserCollection as TinaUserCollection } from "tinacms-authjs/dist/tinacms";
import { defineConfig as defineConfig, LocalAuthProvider as LocalAuthProvider } from "tinacms";
const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
// Your hosting provider likely exposes this as an environment variable
const branch = process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main";
export default defineConfig({
    // contentApiUrlOverride: "/api/tina/gql",
    authProvider: isLocal ? new LocalAuthProvider() : new 
    // Your hosting provider likely exposes this as an environment variable
    UsernamePasswordAuthJSProvider(),
    branch,
    // Get this from tina.io
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    // Get this from tina.io
    token: process.env.TINA_TOKEN,
    build: {
        outputFolder: "admin",
        publicFolder: "static",
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "static",
        },
    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
    schema: {
        collections: [
            TinaUserCollection,
            {
                name: "post",
                label: "Posts",
                path: "content/posts",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        isBody: true,
                    },
                ],
            }
        ]
    }
});
