import { ethers } from 'ethers'

let web3Provider: ethers.providers.Web3Provider
let web3Signer: ethers.providers.JsonRpcSigner

export async function useWeb3Provider() {
  if (!web3Provider) {
    web3Provider = new ethers.providers.Web3Provider((window as any).ethereum)
  }
  if (!web3Signer) {
    web3Signer = web3Provider?.getSigner()
  }
  return { web3Provider, web3Signer }
}
