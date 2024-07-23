export class APIClient {
  constructor(private endpoint: string) {}

  async getAll() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/${this.endpoint}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }
}
