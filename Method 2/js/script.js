/****************
 * GET DISK
 ****************/

//  VUE INSTANCE
const app = new Vue({
    el: '#root',
    data: {
        diskList: [],
        selectedGenre: 'all',
        searchAuthor: '',
        searchTitle: '',
    },
    created(){
        this.callDisk();
    },
    methods: {
        /**
         * Call API Disk
         */
        callDisk(){
            const dataURL = `${window.location.href}scripts/get-disk.php`;
            
            axios.get(dataURL, {
                params: {
                    genre: this.selectedGenre,
                    author: this.searchAuthor,
                    title: this.searchTitle,
                }
            })
            .then(res => {
                this.diskList = res.data.albums;
            })
            .catch(err => {
                console.log(err);
            });
        },

        /**
         * Clear Author Search
         */
        clearSearch(type){
            if(type === 'author'){
                this.searchAuthor = '';
            } else if(type === 'title'){
                this.searchTitle = '';
            }
            this.callDisk();
        },
    },
});