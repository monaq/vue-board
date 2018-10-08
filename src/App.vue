<template>
  <div>
    <HelloWorld />
    <b-card header="Todo List" :no-block="tasksExist">
      <b-list-group v-if="tasksExist">
        <b-list-group-item v-for="task in tasks" :key="task.id" @click.native="moveToDoingList">
        </b-list-group-item>
      </b-list-group>
      <h5 v-else>
        해야할 일이 없습니다.
      </h5>
    </b-card>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .no-padding {
    padding: 0;
    margin: 0;
  }
</style>