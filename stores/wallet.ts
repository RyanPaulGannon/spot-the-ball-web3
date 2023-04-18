import { ethers } from 'ethers'
import { defineStore } from 'pinia'

export const useWalletStore = defineStore('wallet', {
  state: (): {
    account: String
    balance: String | Number | undefined
  } => {
    return { account: '', balance: 0 }
  },
  getters: {
    address(state) {
      return state.account
    },
  },
  actions: {
    async getAddress() {
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      )
      await provider.send('eth_requestAccounts', [])
      const signer = provider.getSigner()
      this.account = await signer.getAddress()
    },
    async updateBalance() {
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      )
      const signer = provider.getSigner()
      const balance = await signer.getBalance()
      return (this.balance = ethers.utils.formatEther(balance))
    },
  },
})
