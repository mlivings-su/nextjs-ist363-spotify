import { getAccessToken } from "../../../lib/spotify";

export async function GET(request) {
  const urlParams = request.nextURL.searchParams;
  const id = urlParams.get("id");

  const token = await getAccessToken();

  const apiResponse = await fetch(
    `https://api.spotify.com/v1/artists/${id}/albums`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const artistsData = await apiResponse.json();

  return new Response(JSON.stringify(albumsData));
}
