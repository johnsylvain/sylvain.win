class LastFMService {
  async getActivity() {
    const response = await fetch(
      `https://wt-5f92353bfdf241b0b97a7b3a6d3547a4-0.sandbox.auth0-extend.com/lastfm`
    );
    return await response.json();
  }
}

export const lastFMService = new LastFMService();
