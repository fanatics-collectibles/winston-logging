export async function register() {
  console.log("calling register...")
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    console.log("runtime is nodejs...")
    await import('./appsignal.cjs');
  }
}