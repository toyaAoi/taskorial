export async function GET() {
  const res = await fetch("http://echo.jsontest.com/message/success");
  const data = await res.json();
  return Response.json(data);
}
