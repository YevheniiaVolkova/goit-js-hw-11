import axios from 'axios';

export default class NewApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  async fetchPhotos() {
    const BASE_URL = `https://pixabay.com/api/?key=24426285-74e09e2af1df6e3bbf36f8aec&q=${this.searchQuery}&per_page=40&page=${this.page}&image_type=photo&orientation=horizontal&safesearch=true`;
    const response = await axios.get(BASE_URL);
    this.page += 1;

    return response.data;
  }
  resetPage() {
    this.page = 1;

  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
