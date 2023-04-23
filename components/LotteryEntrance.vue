<script setup lang="ts">
import { useWalletStore } from '~/stores/wallet'

const wallet = useWalletStore()

async function connectWallet() {
  await wallet.getAddress()
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('account', wallet.address.toString())
  }
}

if (typeof window !== 'undefined' && sessionStorage.getItem('account')) {
  wallet.account = sessionStorage.getItem('account')!
}
</script>

<template>
  <div class="bg-black h-screen">
    <h2 class="text-white text-center pt-2">Welcome to the lottery!</h2>
    <div class="text-center p-4">
      <button class="btn" @click="connectWallet">
        {{ wallet.address ? 'Connected' : 'Connect Wallet' }}
      </button>
      <br /><br />
      <p v-if="wallet.address" class="text-white">
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
