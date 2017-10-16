import {observable, action, computed} from 'mobx';

class BirdStore{
    @observable birds = [];

    @action addBird = (bird)=> {
        this.birds.unshift(bird);
    };

    @action deleteBird = (item) => {
        this.birds.remove(item);
        // alert('deleted')
        // this.birds.clear();

        console.log("--", this.birds)
    };

    @computed get birdCount() {
        return this.birds.length;
    }
}

const store = new BirdStore();

export default store;