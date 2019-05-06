import axios from "axios";
const URL_FOR_ID = "https://www.superheroapi.com/api.php/2321022374616314/";
const URL_FOR_NAME =
  "https://www.superheroapi.com/api.php/2321022374616314/search/";

class Helper {
  heroId: number | string = "";

  isFetchById = () => {
    if (typeof +this.heroId === "number" && this.heroId > 0) return true;
    return false;
  };

  getCorrectUrl = () => {
    return this.isFetchById() ? URL_FOR_ID : URL_FOR_NAME;
  };

  fetchSuperHeroInfo = (heroId: any) => {
    this.heroId = heroId;
    const heroUrl = this.getCorrectUrl();
    return axios.get(`${heroUrl}${heroId}`);
  };
}

export default Helper;
