export function GET() {
  const userId = process.env.PAYAPPUSERID?.trim();

  if (!userId) {
    return Response.json(
      { error: 'PayApp seller ID is not configured.' },
      {
        status: 503,
        headers: { 'Cache-Control': 'no-store' },
      },
    );
  }

  return Response.json(
    { userId },
    { headers: { 'Cache-Control': 'no-store' } },
  );
}
