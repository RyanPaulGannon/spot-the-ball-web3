<script setup lang="ts">
import { ref } from "vue"
import { ethers } from "ethers"

import { abi, contractAddresses } from "~/constants"
import { useWalletStore } from "~/stores/wallet"

// const { chainId } = ethers.providers.getNetwork(5)
// const lotteryAddress =
//   chainId in contractAddresses ? contractAddresses[chainId][0] : null
// const recentWinner = ref("")
// const entranceFee = ref("")
// const numOfPlayers = ref("")

const wallet = useWalletStore()

async function connectWallet() {
  wallet.getAddress()
}

function enterSTB() {}
</script>

<template>
  <div class="bg-black h-screen">
    <h2 class="text-white text-center pt-2">Welcome to the lottery!</h2>
    <div class="text-center p-4">
      <button
        class="rounded bg-white w-5/12 md:w-2/12 lg:w-1/12"
        @click="connectWallet"
      >
        Connect Wallet
      </button>
      <br /><br />
      <p v-if="wallet" class="text-white">
        {{ wallet.address.slice(0, 6) }}...{{
          wallet.account.slice(wallet.account.length - 4)
        }}
      </p>
      <br />
      <button
        class="rounded bg-white w-5/12 md:w-2/12 lg:w-1/12"
        @click="enterSTB"
      >
        Enter Lottery
      </button>
    </div>
    <div>
      <p class="text-white text-center">Previous Winners:</p>
    </div>
  </div>
</template>
