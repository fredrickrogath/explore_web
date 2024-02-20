<template>
    <div id="clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      time: '',
      date: ''
    };
  },
  created() {
    setInterval(this.updateTime, 1000);
    this.updateTime();
  },
  methods: {
    updateTime() {
      const cd = new Date();
      this.time =
        this.zeroPadding(cd.getHours(), 2) +
        ':' +
        this.zeroPadding(cd.getMinutes(), 2) +
        ':' +
        this.zeroPadding(cd.getSeconds(), 2);
      this.date =
        this.zeroPadding(cd.getFullYear(), 4) +
        '-' +
        this.zeroPadding(cd.getMonth() + 1, 2) +
        '-' +
        this.zeroPadding(cd.getDate(), 2) +
        ' ' +
        ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][cd.getDay()];
    },
    zeroPadding(num, digit) {
      let zero = '';
      for (let i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    }
  }
};
</script>

<style scoped>
#clock {
    font-family: 'Share Tech Mono', monospace;
    /* color: blue; */
    text-align: center;
   /* position: absolute;
    left: 50%;
    top: 7%; */
    /* transform: translate(-50%, -50%); */
    /* color: #; */
    /* text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0); */
    .time {
        letter-spacing: 0.05em;
        font-size: 20px;
        padding: 2px 0;
    }
    .date {
        letter-spacing: 0.1em;
        font-size: 24px;
    }
}
</style>