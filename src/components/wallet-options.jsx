import * as React from 'react'
import { Connector, useConnect } from 'wagmi'

export function WalletOptions() {
  const { connectors, connect } = useConnect()

  console.log(connectors)

  return connectors.filter((i) => i.name == 'Injected').map((connector) => (
    <button className="" key={connector.uid} onClick={() => connect({ connector })}>
      Connect Wallet
    </button>
  ))
}