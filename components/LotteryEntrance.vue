<script setup lang="ts">
import { connect } from '@wagmi/core'
import { useWalletStore } from '~/stores/wallet'
import { optimism, polygon } from '@wagmi/core/chains'
import { publicProvider } from '@wagmi/core/providers/public'
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask'
import { createClient, configureChains, mainnet } from '@wagmi/core'

const { provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
)

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors: [new MetaMaskConnector()],
})

const wallet = useWalletStore()
const connectors = useConnectors()

async function connectWallet(connectorName: keyof typeof connectors) {
  const connector = connectors[connectorName]
  await connect({ connector })
}
</script>

<template>
  <h2 text="white center">Welcome to the lottery!</h2>
  <div>
    <button class="btn" cursor="pointer" @click="connectWallet('metamask')">
      Enter Lottery
    </button>
  </div>
  <div>
    <p class="p">Balance</p>
  </div>
  <div>
    <p class="p">Previous Winners:</p>
  </div>
</template>
