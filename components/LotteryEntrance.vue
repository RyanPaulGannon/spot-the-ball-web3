<script setup lang="ts">
import { useWalletStore } from '~/stores/wallet'

const wallet = useWalletStore()

async function connectWallet() {
  wallet.getAddress()
}
</script>

<template>
  <div class="bg-black h-screen">
    <h2 class="text-white text-center pt-2">Welcome to the lottery!</h2>
    <div class="text-center p-4">
      <button class="btn" @click="connectWallet">Connect Wallet</button>
      <br /><br />
      <p v-if="wallet" class="text-white">
        {{ wallet.address.slice(0, 6) }}...{{
          wallet.account.slice(wallet.account.length - 4)
        }}
      </p>
      <br />
      <button class="btn">Enter Lottery</button>
    </div>
    <div>
      <p class="text-white text-center">Balance</p>
    </div>
    <div>
      <p class="text-white text-center">Previous Winners:</p>
    </div>
  </div>
</template>
