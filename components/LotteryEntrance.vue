<script setup lang="ts">
function enterLottery() {
  let account
  ;(window as any).ethereum
    .request({ method: "eth_requestAccounts" })
    .then((accounts: any) => {
      account = accounts[0]
      console.log(account)
    })
}
</script>

<template>
  <div>Welcome to the lottery!</div>
  <button id="connectButton" @click="enterLottery">Enter Lottery</button>
</template>
