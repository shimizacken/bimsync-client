import { observable, action, computed } from 'mobx';

class AccessUrlStore {

    @observable url;

    setUrl(url) {

        this.url = url;
    }
}

export default new AccessUrlStore();