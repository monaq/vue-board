<template>
  <div id="Backlog" class="backlog-view">
    <button>뭐이자식이?</button>
    <NewItemForm />
    <div class="card" v-for="item in items" :key="item.id">
        <div class="card-block">
          <h5 class="card-title"><span class="text-muted">#{{item.id}}</span>
          {{item.text}} <span :class="badgeClass(item)">{{badgeText(item)}}</span></h5>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NewItemForm from './NewItemForm'

const badges = {
  todo: {
    text: 'todo',
    class: 'badge badge-light'
  },
  doing: {
    text: 'doing',
    class: 'badge badge-info'
  },
  done: {
    text: 'done',
    class: 'badge badge-success'
  }
}

export default {
  name: "Backlog",
  components: {
    NewItemForm
  },
  computed: mapState({
    items: s => [...s.items.todo, ...s.items.doing, ...s.items.done]
  }),
  methods: {
    itemLane(item) {
      if (this.$store.state.items.todo.includes(item)) {
        return 'todo'
      } else if (this.$store.state.items.doing.includes(item)) {
        return 'doing'
      }

      return 'done'
    },
    badgeText(item) {
      const lane = this.itemLane(item)
      return badges[lane].text
    },
    badgeClass(item) {
      const lane = this.itemLane(item)
      return badges[lane].class
    }
  }
};
</script>

<style scoped>
  .card {
    margin-bottom: 10px;
  }
  .card:last-child {
    margin-bottom: 25px;
  }
  .card-block {
    padding: 15px;
  }
</style>