<template>
  <section>
    <div>New Date: {{ newDate }}</div>
    <br />
    <div>New Updated Date: {{ updatedDate }}</div>
    <br />
    <div>
      <div
        v-for="post in posts"
        :key="post.id"
        style="
          border: 1px dashed;
          margin-bottom: 5px;
          margin-left: 5px;
          width: 400px;
        "
      >
        <p>{{ post.title }}</p>
        <p>ID: {{ post.id }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      newDate: "",
      updatedDate: "",
    };
  },
  methods: {
    addDays(date, days) {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + days);
      return newDate;
    },
    addMonths(date, months) {
      const newDate = new Date(date);
      newDate.setMonth(newDate.getMonth() + months);
      return newDate;
    },
    async fetchData() {
      try {
        const response = await this.$axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = response.data.map((item) => {
          if (item.id === 1) {
            return {
              ...item,
              title: `I just edited this line.`,
            };
          } else {
            return item;
          }
        });
        this.posts = data;
      } catch (error) {
        console.error("Error fetching data:", error.message);
        // Provide user feedback for the error
      }
    },
  },
  created() {
    this.newDate = this.addDays("10/10/2023", 12).toLocaleString();
    const currentDate = new Date("10/10/2023");
    this.updatedDate = this.addMonths(currentDate, 10).toLocaleString();

    this.fetchData();
  },
  beforeDestroy() {
    console.log("Component is being destroyed");
    // Add any necessary clean-up tasks here
  },
};
</script>
