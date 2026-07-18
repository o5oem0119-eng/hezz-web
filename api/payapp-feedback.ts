import { timingSafeEqual } from 'node:crypto';

const TEST_PRICE = '1000';
const TEST_GOOD_NAME = 'Natural Beauty UGC 제작 가이드 연동 테스트';

function matches(actual: FormDataEntryValue | null, expected: string | undefined) {
  if (typeof actual !== 'string' || !expected) return false;

  const actualBuffer = Buffer.from(actual);
  const expectedBuffer = Buffer.from(expected);

  return actualBuffer.length === expectedBuffer.length
    && timingSafeEqual(actualBuffer, expectedBuffer);
}

export async function POST(request: Request) {
  const form = await request.formData();

  const isValid = [
    matches(form.get('userid'), process.env.PAYAPPUSERID?.trim()),
    matches(form.get('linkkey'), process.env.PAYAPPKEY?.trim()),
    matches(form.get('linkval'), process.env.PAYAPPVALUE?.trim()),
    matches(form.get('price'), TEST_PRICE),
    matches(form.get('goodname'), TEST_GOOD_NAME),
  ].every(Boolean);

  if (!isValid) {
    return new Response('INVALID', {
      status: 403,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  return new Response('SUCCESS', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}
