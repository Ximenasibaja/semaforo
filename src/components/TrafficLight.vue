<template>
  <div class="traffic-light">
    <div class="light red" :style="{ backgroundColor: color === 'red' ? color : 'gray' }"></div>
    <div class="light yellow" :style="{ backgroundColor: color === 'yellow' ? color : 'gray' }"></div>
    <div class="light green" :style="{ backgroundColor: color === 'green' ? color : 'gray' }"></div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'gray'
    }
  }
};
</script>

<style scoped>
.traffic-light {
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 250px; 
  background-color: black; /* Fondo del semáforo */
  border-radius: 10px; 
  padding: 10px;
  justify-content: space-around; /* Espacio entre las luces */
  align-items: center; 
}
.light {
  width: 70px; 
  height: 70px; 
  border-radius: 50%; 
  border: 2px solid white; 
  opacity: 0.6; /* Opacidad para las luces apagadas */
  transition: background-color 0.3s, opacity 0.3s; /* Transición suave */
}
.red {
  background-color: gray; /* Color de fondo inicial */
}
.yellow {
  background-color: gray; /* Color de fondo inicial */
}
.green {
  background-color: gray; /* Color de fondo inicial */
}
</style>
