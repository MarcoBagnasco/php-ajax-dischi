/****************
 * GET DISK
 ****************/

//  VUE INSTANCE
const app = new Vue({
    el: '#root',
    data: {
        diskList: [],
        searchString: '',
        selectedGenre: 'all',
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
                    author: this.searchString,
                    genre: this.selectedGenre,
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
        clearAuthor(){
            this.searchString = '';
            this.callDisk();
        },
        // /**
        //  * Call API Filtered Disk
        //  */
        // searchAuthor(){
        //     const dataURL = `${window.location.href}scripts/get-disk-filtered-by-author.php`;

        //     axios.get(dataURL, {
        //         params: {
        //             author: this.searchString,
        //         }
        //     })
        //     .then(res => {
        //         this.diskList = res.data;
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
        // }
    },
});