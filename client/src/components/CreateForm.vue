<template>
  <div class="box">
    <form class="form-horizontal" novalidate v-on:submit.prevent="submit">
      <div class="form-group">
        <div class="label-input">
          <label for="name" class="control-label">Name:</label>
          <input id="name" type="text" class="form-control" v-model="form.name" required>
        </div>
      </div>

      <div class="form-group">
        <div class="label-input">
          <label for="description" class="control-label">Description:</label>
          <input id="description" type="text" class="form-control" v-model="form.description" required>
        </div>
      </div>
      <div class="form-group">
        <div class="label-input">
          <label for="price" class="control-label">Price:</label>
          <input id="price" type="text" class="form-control" v-model="form.price" required>
        </div>
      </div>

      <div class="form-group">
        <div class="submit-row">
          <button type="submit" class="btn btn-primary">submit</button>
          </div>
      </div>
    </form>
  </div>
</template>

<script>
  import clipboard from 'clipboard-js'
  
  export default {
    data() {
      return {
        form: {
          name: '',
          description: '',
          price: ''
        },
        shortened: ''
      }
    },
    mounted() {
      global.jQuery('#clipboard').tooltip('hide')
        .attr('data-title', 'Copied!')
        .attr('data-placement', 'right')
        .attr('data-trigger', 'click')
    },
    methods: {
      submit() {
        this.shortened = ''
        // Shorten URL
        fetch('http://localhost:3000/add', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        })
        .then(res => res.json())
        .then(data => {
          if (data.error) {
          	alert('error')
          } else {
          	alert('OK')
          }
        })
      }
    }
  }
</script>

<style scoped>
  .submit-row {
    margin-left: 10px;
    margin-top: 5px;
    margin-right: 10px;
    display: flex;
    flex-direction: row;
  }

  .submit-row>input {
    margin-left: 15px;
    margin-right: 15px;
  }

  .box {
    color: black;
    border-radius: 5px;
    background-color: whitesmoke;
    width: 500px;
    padding-bottom: 20px;
  }

  @media only screen and (max-width: 768px) {
    .box {
      width: 90%;
    }
  }

  .form-group {
    margin: 0 auto;
    width: 90%;
  }

  .label-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin: 10px;
  }
</style>
