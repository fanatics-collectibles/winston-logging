/**
 * https://docs.appsignal.com/nodejs/3.x/integrations/nextjs.html
 */

export async function register() {
  console.log('register function');
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./appsignal');
  }
}
