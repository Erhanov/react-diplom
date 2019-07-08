export default class RestoService {
    constructor() {
        this._dataBase = 'http://localhost:3000';
    }

    async getMenuItems() {
        const res = await fetch(`${this._dataBase}`);

        if (!res.ok) {
            throw new Error(`Could not fetch, status ${res.status}`);
        }

        return await res.json();
    };

    getBestSellers = async () => {
        const result = await this.getMenuItems("/bestsellers");
        return this._transformBestSellers(result);
    }

    getCoffee = async () => {
        const result = await this.getMenuItems("/coffee");
        return this._transformCoffee(result);
    }

    getGoods = async () => {
        const result = await this.getMenuItems("/goods");
        return this._transformGoods(result);
    }

    _transformBestSellers(char) {

        return {
            name : char.name,
            url : char.url,
            price : char.price,
            id : char.url.replace(/\D+/, '')
        }
    }

    _transformCoffee(char) {

        return {
            name : char.name,
            country : char.country,
            url : char.url,
            price : char.price,
            id : char.url.replace(/\D+/, '')
        }
    }

    _transformGoods(char) {

        return {
            name : char.name,
            url : char.url,
            price : char.price,
            id : char.url.replace(/\D+/, '')
        }
    }
}