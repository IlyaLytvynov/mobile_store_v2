/**
 * Created by IlyaLitvinov on 01.11.16.
 */
class BucketService {
    constructor($http, enums) {
        this.items = [];
        this.timestamp = Date.now();
    }

    addItem(item) {
        this.timestamp = Date.now();
        this.items.push(item);
    }
    getItems() {
        return this.items
    }
}


export default BucketService;