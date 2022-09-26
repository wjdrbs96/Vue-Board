<template>
  <div class="container-fluid">
    <div class="row mt-3">
      <h1>Post List</h1>
      <div class="row mt-2">
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table table-sm table-hover word-break" style="table-layout: fixed">
              <thead class="table-secondary">
                <tr class="text-center">
                  <th class="col-1">
                    #
                  </th>
                  <th class="col-1">
                    name
                  </th>
                  <th class="col-1">
                    title
                  </th>
                </tr>
              </thead>
              <tbody class="text-center">
                <template>
                  <tr>
                    <td>test1</td>
                    <td>test2</td>
                    <td>test5</td>
                  </tr>
                  <tr>
                    <td>test3</td>
                    <td>test4</td>
                    <td>test6</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods: {
    
  }
}
</script>

<style>

</style>