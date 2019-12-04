<template>
    <div>
        <input @input="chenge" v-model="flag" type="text">
        <div @click="handelClick(e,index)" v-for="(item,index) in temp" :key="item">
            {{ item }}
        </div>
        <div>
            {{ result }}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            flag: '',
            info: [
                '陈小',
                "王珊",
                '王八'
            ],
            id:['1928921','129932','3128'],
            temp:[],
            result:''
        }
    },
    methods:{
        chenge(){
            let i = 0;
            this.temp = this.info.filter( (item,index) => {
                const fl = item.includes(this.flag)
                if(fl){
                    i = index
                }
                return fl
            } )
            console.log(i)
        },
        handelClick(e, index){
            console.log(index)
        }
    }

}
</script>

<style>

</style>