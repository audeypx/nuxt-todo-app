<template>
  <div class="bg-dark-inner">
    <div>
      <div class="background"></div>
      <div class="lg:w-2/5 md:w-3/6 sm:w-4/6 w-95 m-auto -mt-64">
        <div class="flex justify-between py-12">
          <p class="tracking-tighter text-3xl font-extrabold text-white">
            TODO
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-sun"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="4" />
            <path
              d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
            />
          </svg>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
</svg> -->
        </div>
        <div class="flex relative">
          <div class="pt-3 pl-4 bg-dark-inner round-side">
            <div
              class="rounded-full w-7 h-7 border border-dark-circleborder"
            ></div>
          </div>
          <input
            class="text-dark-newtodocolor bg-dark-inner round-side-big flex items-center w-full p-4 focus:outline-none "
            type="text"
            placeholder="Create a new todo..."
            v-model="newTodo"
            @keyup.enter="addTodo"
          />
        </div>

        <div
          class="task-container text-dark-newtodocolor rounded-md bg-dark-inner mt-8"
        >
          <draggable
            tag="div"
            v-model="todos"
            @start="drag = true"
            @end="drag = false"
            item-key="todos[index]"
          >
            <div
              v-for="(todo, index) in todosFiltered"
              :key="index"
              class="list-tasks bg-dark-inner py-2 px-4 "
            >
              <div class="todo-p flex justify-start items-center">
                <label class="custom-checkbox">
                  <input type="checkbox" v-model="todo.completed" />
                  <span></span>
                </label>
                <p :class="{ completed: todo.completed }">{{ todo.title }}</p>
              </div>
              <button
                class="cancel text-3xl bg-transparent border-0 ring-dark-circleborder cursor-pointer"
                @click="removeTodo(index)"
              >
                <!-- <img src="~/assets/icon-cross.svg" />  -->
                x
              </button>
            </div></draggable
          >

          <div
            class="list-footer text-dark-newtodocolor text-xs flex justify-between p-4 items-center"
          >
            <p class="items-left text-sm">{{ remaining }}items left</p>
            <!-- <div class="all-active-completed">
              <button class="btn font-bold text-base pr-2" data-btn-all="">
                All
              </button>
              <button class="btn font-bold text-base pr-2" data-btn-active="">
                Active
              </button>
              <button
                class="btn active font-bold text-xl text-dark-activebuttonanchor"
                data-btn-completed=""
              >
                Completed
              </button>
            </div> -->

            <div class="filter all-active-completed" id="filter">
              <button class="btn font-bold text-sm sm:text-base pr-2">
                <p
                  :class="{ active: filter === 'all' }"
                  @click="filter = 'all'"
                >
                  All
                </p>
              </button>
              <button class="btn font-bold text-sm sm:text-base pr-2">
                <p
                  :class="{ active: filter === 'active' }"
                  @click="filter = 'active'"
                >
                  Active
                </p>
              </button>

              <button
                class="btn active font-bold text-sm sm:text-xl text-dark-activebuttonanchor"
              >
                <p
                  :class="{ active: filter === 'allCompleted' }"
                  @click="filter = 'allCompleted'"
                >
                  Completed
                </p>
              </button>
            </div>
            <button
              id="clear"
              class="clear-completed btn"
              data-clear-completed=""
            >
              <p @click="completedClear">Clear Completed</p>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="lower-background">
      <p class="text-dark-newtodocolor text-center pt-16">
        Drag and drop to reorder list
      </p>
      <div class=" pt-40">
        <p class="text-center text-dark-footercolor">
          Challenge by
          <a
            class="text-white"
            href="https://www.frontendmentor.io"
            target="_blank"
            >Frontend Mentor.</a
          >
          Coded by:
          <a
            class="text-white"
            href="https://github.com/audeypx"
            target="_blank"
            >Audrey.</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import Draggable from 'vuedraggable';
// import Vue from 'vue';
// Vue.component('draggable', Draggable);

export default {
  name: "TodoList",
  props: ["mode"],
  // plugins: [
  //   { src: '~/plugins/draggable.ts', mode: 'client' }
  // ],
  // components: {
  //   draggable: vuedraggable,
  // },
  data() {
    return {
      newTodo: "",
      nextId: 3,
      filter: "all",
      todos: [
        {
          id: 1,
          title: "Coding",
          completed: false
        },
        {
          id: 2,
          title: "Singing",
          completed: false
        }
      ]
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length === 0) {
        return;
      }
      this.todos.push({
        id: this.nextId,
        title: this.newTodo,
        completed: false
      });
      (this.newTodo = ""), this.nextId++;
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    completedClear() {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  },
  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.completed).length;
    },
    todosFiltered() {
      if (this.filter === "all") {
        return this.todos;
      } else if (this.filter === "active") {
        return this.todos.filter(todo => !todo.completed);
      } else if (this.filter === "allCompleted") {
        return this.todos.filter(todo => todo.completed);
      }
      return this.todo;
    }
  }
};
</script>

<style>
/* .container-width {
  width: 95%;
} */
.background {
  background-image: url("~/images/bg-desktop-dark.jpg");
  background-position: top center;
  height: 40vh;
}
.round-side {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}
.round-side-big {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}

.input::before {
  content: "";
  position: absolute; /* positioning agains new task form */
  left: 1rem;
  height: 25px;
  width: 25px;
  border: 1px solid theme("colors.dark.circleborder");
  border-radius: 50%;
}

.task-container {
  box-shadow: 5px 40px 25px 0 rgba(0, 0, 0, 0.5);
}

.lower-background {
  /* height: 55vh; */
}

.custom-checkbox input {
  display: none;
}

.custom-checkbox span {
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: 1px solid#CACDE8;
  border-radius: 50%;
  outline: none;
  margin: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-checkbox input:checked + span {
  background: linear-gradient(#57ddff, #c058f3);
  border: none;
}

.custom-checkbox input:checked + span:before {
  content: "";
  width: 23px;
  height: 23px;
  border-radius: 50%;
  display: block;
  background: url("~/images/icon-check.svg") no-repeat,
    linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  background-position: center;
}

.cancel {
  font-weight: 100;
  float: right;
}

.cancel:focus {
  outline: none;
}

.list-tasks {
  border-bottom: 1px solid #777a92;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  transition: background 0.3s ease-in-out;
  animation: fadeIn ease 0.7s;
}
</style>
