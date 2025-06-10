import { useState } from "react";
import { generateMnemonic } from "bip39";
import Navbar from "./components/Navbar";
import { SolanaWallet } from "./components/SolanaWallet";
import { EthWallet } from "./components/EthWallet";
import "./App.css";

function App() {
  const [mnemonic, setMnemonic] = useState("");
  const [blockchain, setBlockchain] = useState("Solana");

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center py-10">
        <div className="w-full max-w-2xl bg-[#181f2a] rounded-2xl shadow-2xl p-8">
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition mb-8"
            onClick={async () => {
              const mn = await generateMnemonic();
              setMnemonic(mn);
            }}
            >
            Generate New Mnemonic
            </button>
            <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-2">
              Mnemonic Phrase:
            </h2>
            <div className="bg-gray-900 text-blue-200 font-mono rounded-lg p-3 text-base">
              {mnemonic ? (
              <div className="grid grid-cols-4 gap-2">
                {mnemonic.split(' ').map((word, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-gray-500 mr-2">{index + 1}.</span>
                  {word}
                </div>
                ))}
              </div>
              ) : (
              <span className="text-gray-500">
                No mnemonic generated yet.
              </span>
              )}
            </div>
            </div>
            <div className="mb-8">
            <label className="block text-white font-semibold mb-2">
              Select Blockchain:
            </label>
            <select
              className="w-full bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none"
              value={blockchain}
              onChange={(e) => setBlockchain(e.target.value)}
            >
              <option value="Solana">Solana</option>
              <option value="Ethereum">Ethereum</option>
            </select>
            </div>
            <div className="flex gap-4 mb-8">
            <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg shadow transition">
              Add New Wallet
            </button>
            <button
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg shadow transition"
              
            >
              Delete All Wallets
            </button>
            </div>
            {/* Wallets List */}
          <div className="bg-[#232c3b] rounded-xl p-6 shadow mb-4">
            <h3 className="text-lg font-bold text-white mb-2">
              {blockchain} Wallet 1
            </h3>
            <div className="text-gray-300 mb-2">Public Key:</div>
            <div className="bg-gray-800 text-blue-200 font-mono rounded-md p-2 mb-4 break-all">
              {/* Replace with actual wallet address */}
              <SolanaWallet mnemonic={mnemonic} />
            </div>
            <div className="flex gap-2">
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold transition">
                Delete
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition">
                Check Balance
              </button>
            </div>
          </div>
          {/* Add more wallets as needed */}
        </div>
      </div>
    </>
  );
}

export default App;
