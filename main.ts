import { serve } from "https://deno.land/std@0.85.0/http/server.ts"


const handler = serve({ port: 80 })

const appName = Deno.env.get("APP_NAME");

console.log("App name:", appName)
console.log("Serving at 80")

for await (const req of handler) {
 req.respond({ body: "Hello "+ appName + "!\n" })
}