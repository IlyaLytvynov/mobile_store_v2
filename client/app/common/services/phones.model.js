/**
 * Created by IlyaLitvinov on 01.11.16.
 */
class PhoneModel {
    constructor($http, enums) {
        this.baseUrl = enums.baseUrl + "/phones";
        this.$http = $http;
    }

    getAll() {
        return this.$http.get(this.baseUrl)
            .then((resp) => {
                return resp.data;
            });
    }
}


export default PhoneModel;