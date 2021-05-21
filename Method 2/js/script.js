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
            const dataURL = `${window.location.href}scripts/get-disk.php`;
            
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