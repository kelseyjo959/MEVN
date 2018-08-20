<template>
    <div class="hello">
        <h1>Hello</h1>
        <!-- <button class='Button' v-on:click="sendLog()">Talk to server</button> -->
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()">
        <button v-on:click="submitFile()">Submit here</button>
    </div>
</template>

<script>
import axios from'axios'

  export default {
      data() {
        return {
          file: ''
        }
      },
      methods: {
          handleFileUpload (event) {
              this.file = this.$ref.file.files[0]
          }, 
          submitFile () {
            let formData = new FormData()
            formData.append('file', this.file)
            axios.post ('/single-file',
              formData, 
              {
                headers: { 'Content-Type': 'multipart/form-data' }
              }
            ).then(function() {
                console.log('good')
            }).catch(function() {
                console.log('fail')
            })
          }
          // sendLog () {
          //    alert('Hello') 
          //    this.axios.get('http://localhost:3000/uploader').then((response) => {
          //        this.test = response.data
          //    })
          //   console.log('button clicked')
          // }
      }
  }
</script>
