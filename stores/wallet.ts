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

      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem('account', this.account.toString())
      }
    },
    async updateBalance() {
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      )
      const signer = provider.getSigner()
      const balance = await signer.getBalance()
      this.balance = ethers.utils.formatEther(balance)

      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem('balance', this.balance.toString())
      }
    },
    onInit() {
      if (typeof sessionStorage !== 'undefined') {
        const account = sessionStorage.getItem('account')
        const balance = sessionStorage.getItem('balance')

        if (account) {
          this.account = account
        }

        if (balance) {
          this.balance = balance
        }
      }
    },
  },
})
