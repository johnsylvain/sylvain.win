class SoundCloudService {
  async getAlbums() {
    const response = await fetch(
      'https://api.soundcloud.com/users/johnsylvain/playlists?client_id=f17c1d67b83c86194fad2b1948061c9e'
    );
    return await response.json();
  }
}

export const soundCloudService = new SoundCloudService();
