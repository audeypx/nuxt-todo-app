<template>
  <div>
    <div class="background">
      <div class="w-2/5 m-auto">
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
        </div>
        <div class="flex relative">
          <div class="pt-3 pl-4 bg-dark-inner round-side">
            <div class="rounded-full w-7 h-7 border border-dark-circleborder"></div>
          </div>
          <input
            class="text-dark-newtodocolor bg-dark-inner round-side-big flex items-center w-full p-4 focus:outline-none "
            type="text"
            placeholder="       Create a new todo..."
          />
        </div>
        <div class="task-container rounded-md bg-dark-inner mt-10">
          <div class="list-tasks" data-list-of-tasks=""></div>

          <div
            class="list-footer text-dark-newtodocolor text-xs flex justify-between p-4 items-center"
          >
            <p class="items-left text-sm" data-items-left="">3 items left</p>
            <div class="all-active-completed">
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
            </div>
            <button class="clear-completed btn" data-clear-completed="">
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="lower-background bg-dark-outer">
      <p class="text-dark-newtodocolor text-center pt-20">
        Drag and drop to reorder list
      </p>
      <div class=" pt-48">
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
export default {};
</script>

<style>
.background {
  background-image: url("~/images/bg-desktop-dark.jpg");
  background-position: top center;
  height: 45vh;
}
.round-side{
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}
.round-side-big{
  border-top-right-radius: 0.375rem ;
  border-bottom-right-radius: 0.375rem ;
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
  height: 55vh;
}
</style>
