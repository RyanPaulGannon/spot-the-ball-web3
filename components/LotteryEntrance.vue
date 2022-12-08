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
  <div class="bg-black h-screen">
    <h2 class="text-white text-center pt-2">Welcome to the lottery!</h2>
    <div class="text-center p-4">
      <button class="rounded bg-white w-3/12" @click="enterLottery">
        Enter Lottery
      </button>
    </div>
    <div>
      <p class="text-white text-center">Previous Winners:</p>
    </div>
  </div>
</template>
