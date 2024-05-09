import { getAccessToken } from "../../../lib/spotify";

export async function GET() {
  const token = await getAccessToken();

  const artists = [
    {
      name: "Taylor Swift",
      spotify_id: "06HL4z0CvFAxyc27GXpf02",
    },
    {
      name: "Beyoncé",
      spotify_id: "6vWDO969PvNqNYHIOW5v0m",
    },
    {
      name: "Ariana Grande",
      spotify_id: "66CXWjxzNUsdJxJ2JdwvnR",
    },
    {
      name: "Olivia Rodrigo",
      spotify_id: "1McMsnEElThX1knmY4oliG",
    },
    {
      name: "Lil Yachty",
      spotify_id: "6icQOAFXDZKsumw3YXyusw",
    },
    {
      name: "SZA",
      spotify_id: "7tYKF4w9nC0nq9CsPZTHyP",
    },
    {
      name: "Lauryn Hill",
      spotify_id: "2Mu5NfyYm8n5iTomuKAEHl",
    },
    {
      name: "Tems",
      spotify_id: "687cZJR45JO7jhk1LHIbgq",
    },
    {
      name: "Mariah the Scientist",
      spotify_id: "7HO5fOXE4gh3lzZn64tX2E",
    },
    {
      name: "Mac Miller",
      spotify_id: "4LLpKhyESsyAXpc4laK94U",
    },
  ];

  // Extract the artist IDs

  const artistsIds = artists.map((artist) => artist.spotify_id);

  // Convert the artist IDs to a string

  const artistsString = artistsIds.join(",");

  const apiResponse = await fetch(
    `https://api.spotify.com/v1/artists?ids=${artistsString}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const artistsData = await apiResponse.json();

  return new Response(JSON.stringify(artistsData));
}
