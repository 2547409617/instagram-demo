


export async function GET(
  req: Request,
) {

  const { searchParams } = new URL(req.url);

  const limit = searchParams.get("limit") ?? '9';
  const page = searchParams.get("page") ?? '1';

  const rows = []
  const start_id = parseInt(limit) * (parseInt(page) - 1) + 1
  for(let i=0; i<parseInt(limit); i++) {
    const row = {
      id: start_id + i,
      url: '/post_image.jpeg',
      likes: Math.floor(Math.random() * 100),
      comments: Math.floor(Math.random() * 100),
    }
    rows.push(row)
  }


  return Response.json(rows);
}


