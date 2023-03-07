import data from "../data.json";

export async function GET(request: Request) {
  return new Response(JSON.stringify(data.crew), {status: 200, headers: {'content-type': 'application/json'}})
}
