const DYNAMIC_RATE_URL = 'http://www.nbrb.by/API/ExRates/Rates/Dynamics/';
const CURRENCIES_LIST_URL = 'http://www.nbrb.by/API/ExRates/Currencies/';
const RATE_URL = 'http://www.nbrb.by/API/ExRates/Rates/';

let CurrencyAPI = {
    async getDynamicRates(Cur_ID, startDate, endDate) {
        let link =
            DYNAMIC_RATE_URL 
            + Cur_ID 
            + '?' 
            + encodeData({ startDate, endDate });

        let response = await fetch(link);

        if (response.ok) {
            return await response.json();
        } else {
            alert('HTTP Error: ' + response.status);
        }
    },

    async getCurrencies() {
        let response = await fetch(CURRENCIES_LIST_URL)

        if (response.ok) {
            return await response.json();
        } else {
            alert('HTTP Error: ' + response.status);
        }
    },

    async getRate(Cur_ID, onDate){
        let link = RATE_URL + Cur_ID + '?' + encodeData({onDate});
        console.log(link);
        let response = await fetch(link);

        if (response.ok) {
            return await response.json();
        } else {
            alert('HTTP Error: ' + response.status);
        }
    }
};


function encodeData(data) {
    const tmp = [];
    for (let d in data)
        tmp.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return tmp.join('&');
}

export default CurrencyAPI;