import React from "react";
import {
  WagmiProvider,
  createClient,
  configureChains,
  useConnect,
  useAccount,
} from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { InjectedConnector } from "wagmi/connectors";
import { publicProvider } from "@wagmi/core/providers/public"; // updated path

const { chains, provider } = configureChains(
  [mainnet, sepolia],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  connectors: [new InjectedConnector({ chains })],
  provider,
});

function WalletConnect() {
  const { connect, connectors } = useConnect();
  const { address, isConnected } = useAccount();

  return (
    <div className="mt-100">
      {isConnected ? (
        <p className="">Wallet Address: {address}</p>
      ) : (
        connectors.map((connector) => (
          <button key={connector.id} onClick={() => connect({ connector })}>
            Connect Wallet
          </button>
        ))
      )}
    </div>
  );
}

export default function WalletButton() {
  return (
    <WagmiProvider client={client}>
      {" "}
      {/* Changed WagmiConfig to WagmiProvider */}
      <WalletConnect />
    </WagmiProvider>
  );
}
