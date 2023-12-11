# JustRun

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Edge Functions

https://supabase.com/docs/guides/functions/quickstart

### Deploying functions to production

1. Deploy

   ```
   supabase functions deploy

   ```

2. Login
   ```
   supabase login
   ```
3. ```
   supabase link --project-ref your-project-id

   ```

> [!NOTE]
>
> - Make sure your authenticated
> - Make sure the project is linked

### Running them locally

1. Running supabase services locally
   ```
   supabase start
   ```
2. Serve supabase edge functions locally
   ```
   supabase functions serve
   ```
