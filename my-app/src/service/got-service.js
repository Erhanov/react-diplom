export default class GotService {
    constructor() {
        this._dataBase = 'http://localhost:3000';
    }

    getService = async (url) => {
        const res = await fetch(`${this._dataBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch, status ${res.status}`);
        }

        return await res.json();
    };

    getBestSellers = async () => {
        const result = await this.getService("/bestsellers");
        return this._transformBestSellers(result);
    }

    getCoffee = async () => {
        const result = await this.getService("/coffee");
        return this._transformCoffee(result);
    }

    getGoods = async () => {
        const result = await this.getService("/goods");
        return this._transformGoods(result);
    }

    _transformBestSellers(item) {

        return {
            name : item.name,
            url : item.url,
            price : item.price
        }
    }

    _transformCoffee(item) {

        return {
            name : item.name,
            country : item.country,
            url : item.url,
            price : item.price,
            description : item.description
        }
    }

    _transformGoods(item) {

        return {
            name : item.name,
            url : item.url,
            price : item.price
        }
    }
}