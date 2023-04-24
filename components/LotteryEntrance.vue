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
  <div bg="black" align="center">
    <h2 text="white center">Welcome to the lottery!</h2>
    <div>
      <button class="btn" @click="connectWallet">
        {{ wallet.address ? 'Connected' : 'Connect Wallet' }}
      </button>
      <div>
        <p v-if="wallet.address" class="p">
          {{ wallet.address.slice(0, 6) }}...{{
            wallet.account.slice(wallet.account.length - 4)
          }}
        </p>
      </div>
      <div>
        <button class="btn">Enter Lottery</button>
      </div>
      <div>
        <p class="p">Balance</p>
      </div>
      <div>
        <p class="p">Previous Winners:</p>
      </div>
    </div>
  </div>
</template>
