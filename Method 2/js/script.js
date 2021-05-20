/****************
 * GET DISK
 ****************/

//  VUE INSTANCE
const app = new Vue({
    el: '#root',
    data: {
        diskList: [],
    },
    created(){
        this.callDisk();
    },
    methods: {
        /**
         * Call API Disk
         */
        callDisk(){
            const dataURL = 'http://localhost/Exercise_php/Esercizio_48/php-ajax-dischi/Method%202/scripts/get-disk.php';

            axios.get(dataURL)
            .then(res => {
                this.diskList = res.data;
            })
            .catch(err => {
                console.log(err);
            });
        }
    },
});