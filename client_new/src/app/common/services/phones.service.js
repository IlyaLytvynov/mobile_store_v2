const baseUrl = "http://localhost:4001/api/v1/";

class PhonesModel {
    /** @ngInject */
    constructor($http) {
        this.data = ['asdasd', 'sadasdasd'];
        this.$http = $http;
    }

    getItems() {
        return this.$http.get(baseUrl + "phones").then((response) => {
            debugger;
            return response.data;
        }, (e)=> {

        })
    }
    getOne(id) {
        return this.$http.get(baseUrl + "phones/" + id).then((response) => {
            debugger;
            return response.data;
        }, (e)=> {

        })
    }
}

export default PhonesModel;