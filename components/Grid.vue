<template>
  <table>
    <tbody>
      <tr v-for="row in rows" :key="row.id">
        <td v-for="col in cols" :key="col.id">{{ row.cells[col.id] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const rows = [
  {
    id: 1,
    cells: ['', '', '', '', '', '', '', ''],
  },
  {
    id: 2,
    cells: ['', '', '', '', '', '', '', ''],
  },
  {
    id: 3,
    cells: ['', '', '', '', '', '', '', ''],
  },
  {
    id: 4,
    cells: ['', '', '', '', '', '', '', ''],
  },
  {
    id: 5,
    cells: ['', '', '', '', '', '', '', ''],
  },
  {
    id: 6,
    cells: ['', '', '', '', '', '', '', ''],
  },
  {
    id: 7,
    cells: ['', '', '', '', '', '', '', ''],
  },
]
const cols = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
]
</script>

<style>
table {
  background-image: url('../public/stb.png');
  height: 400px;
  width: 50%;
}
table td {
  border: 1.5px solid blue;
}
td:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 640px) {
  table {
    width: 100%;
  }
}

@media (min-width: 641px) {
  table {
    width: 50%;
  }
}
</style>
