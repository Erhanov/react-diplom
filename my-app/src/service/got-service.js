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
        return result;
    }

    getCoffee = async () => {
        const result = await this.getService("/coffee");
        return result;
    }

    getGoods = async () => {
        const result = await this.getService("/goods");
        return result;
    }

    getOneCoffee = async (id) => {
        const result = await this.getService(`/beans${id}`);
        return result;
    }
}