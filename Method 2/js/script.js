/****************
 * GET DISK
 ****************/

//  VUE INSTANCE
const app = new Vue({
    el: '#root',
    data: {
        diskList: [],
        searchString: '',
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
            
            axios.get(dataURL)
            .then(res => {
                this.diskList = res.data;
            })
            .catch(err => {
                console.log(err);
            });
        },
        /**
         * Call API Filtered Disk
         */
        searchAuthor(){
            const dataURL = `${window.location.href}scripts/get-disk-filtered-by-author.php`;

            axios.get(dataURL, {
                params: {
                    author: this.searchString,
                }
            })
            .then(res => {
                this.diskList = res.data;
            })
            .catch(err => {
                console.log(err);
            });
        }
    },
});