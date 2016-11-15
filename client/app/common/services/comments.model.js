/**
 * Created by IlyaLitvinov on 01.11.16.
 */
class CommentsModel {
    constructor($http, enums) {
        this.baseUrl = enums.baseUrl + "/comments/";
        this.$http = $http;
    }

    get(id) {
        return this.$http.get(this.baseUrl + id)
            .then((resp) => {
                return resp.data;
            });
    }

}


export default CommentsModel;