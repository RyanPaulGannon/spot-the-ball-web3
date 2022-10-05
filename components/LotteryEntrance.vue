<script setup lang="ts">
import { abi, contractAddresses } from "../constants"
// const lotteryAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
let enterLottery: any
</script>

<template>
  <div>Welcome to the lottery!</div>
  <button @click="enterLottery">Enter Lottery</button>
</template>
