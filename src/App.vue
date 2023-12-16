<template>
  <div>
    <p>Current Date: {{ currentDate }}</p>
    <p>Current Day: {{ getDay() }}</p>
    <p>Current Month: {{ getMonth() }}</p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const date = ref(new Date());

    const getDay = () => {
      return date.value.getDay();
    };

    const getMonth = () => {
      return date.value.getMonth() + 1;
    };

    const addDay = (numberOfDays) => {
      date.value.setDate(date.value.getDate() + numberOfDays);
      if (date.value.getMonth() !== getMonth() - 1) {
        date.value.setDate(1);
      }
    };

    const addMonth = (numberOfMonths) => {
      date.value.setMonth(date.value.getMonth() + numberOfMonths);
      if (date.value.getMonth() !== (getMonth() - 1 + numberOfMonths) % 12) {
        date.value.setMonth(0);
      }
    };

    return {
      currentDate: date,
      getDay,
      getMonth,
      addDay,
      addMonth,
    };
  },
};
</script>
