import axios from "axios";

export default class FakeYoutube {
  //리팩토링 한 코드
  async search() {
    return axios.get(`/data/search.json`);
  }

  async videos() {
    return axios.get("/data/popular.json");
  }

  //리팩토링 하기 전 코드
  // async search(keyword) {
  //   return keyword ? this.#searchByKeyword() : this.#popular();
  // }

  // async #searchByKeyword() {
  //   return axios
  //     .get(`/data/search.json`)
  //     .then((res) => res.data.items)
  //     .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  // }

  // async #popular() {
  //   return axios.get(`/data/popular.json`).then((res) => {
  //     return res.data.items;
  //   });
  // }
}
