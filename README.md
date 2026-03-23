# 🦾 MechForge

**Stake DOT. Mine Materials. Build Mechs. Earn More.**

[![DoraHacks](https://img.shields.io/badge/DoraHacks-Submission-orange)](https://dorahacks.io/)
[![Polkadot](https://img.shields.io/badge/Polkadot-Hub-pink)](https://polkadot.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> A gamified liquid staking protocol on Polkadot Hub where staking rewards become crafting materials for building NFT mechs.

---

## 🎯 DoraHacks Submission

**Track:** Web3 Gaming / DeFi Innovation  
**Team:** Level 100 Studios  
**Deployment:** Moonbase Alpha Testnet

---

## 🎮 The Game Loop

```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐    ┌─────────────┐
│  Stake DOT  │───▶│ Mine Materials│───▶│ Build Mechs │───▶│ Boost Yield │
└─────────────┘    └──────────────┘    └─────────────┘    └──────┬──────┘
     ▲                                                            │
     └────────────────────────────────────────────────────────────┘
```

1. **Stake DOT** → Earn MATERIALS over time (based on stake amount + duration)
2. **Mine Materials** → Iron, Titanium, Plasma Cores, Quantum Chips, Dark Matter
3. **Build Mechs** → Spend materials to forge Mech NFTs
4. **Boost Yield** → Mechs increase staking APY + unlock governance
5. **Upgrade** → Better mechs = more materials = better mechs

---

## 📜 Contract Addresses (Moonbase Alpha)

| Contract | Address | Purpose |
|----------|---------|---------|
| **Materials** | `0xCce5e4DA24f875E4375b6CC1D193dC9396b7238C` | ERC1155 multi-token (Iron, Titanium, Plasma, Quantum, DarkMatter) |
| **MechNFT** | `0x054842F260F2C67e1A6DeA28Cd100A48f76d370F` | ERC721 mechs with attributes and rarity |
| **MechForgeStaking** | `0xBe54F90DA476855Aa2dA0D534fbB94D988A93Ab2` | Stake DOT, earn materials, unstake |
| **AIOracle** | `0xddd348278A820845ee9eE68cDB87b3C0a112C100` | Random rare drops, material events |
| **Forge** | `0x16d2458986A2021104B7dDf432A7da8F7b412774` | Burn materials, mint mechs with fee |

**Explorer:** [Moonscan Moonbase Alpha](https://moonbase.moonscan.io/)

---

## ✨ Features

### 🏦 Liquid Staking
- Stake DOT tokens to receive liquid staking position
- Earn ERC1155 material tokens based on stake duration and amount
- No lock-up period (with optional time-locks for bonus rewards)

### 🎨 Material Mining (ERC1155)
Five unique materials with different rarities:
- 🔩 **Iron** - Common
- ⚙️ **Titanium** - Uncommon  
- 🔥 **Plasma Core** - Rare
- 💎 **Quantum Chip** - Epic
- 🌌 **Dark Matter** - Legendary

### 🤖 Mech NFTs (ERC721)
Forge unique mechs with procedurally generated attributes:
- **Rarity Tiers:** Common, Uncommon, Rare, Epic, Legendary
- **Mech Classes:** Scout, Striker, Vanguard, Omega
- **Attributes:** Attack, Defense, Speed, Energy
- **Visual 3D Models:** GLB format with unique designs

### ⚡ Yield Boosting
- Equip mechs to boost staking APY
- Higher rarity = bigger boost
- Multiple mech slots for compound effects

### 🔮 AI Oracle
- Random rare material drops
- Dynamic event-based rewards
- Verifiable randomness integration

### 🏛️ Governance
- Mech ownership = voting power
- Participate in protocol decisions
- Rarity-weighted voting

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Smart Contracts** | Solidity ^0.8.20 |
| **Development** | Hardhat |
| **Testing** | Hardhat Network + Ethers.js |
| **Frontend** | HTML5, Three.js, Tailwind CSS |
| **Network** | Moonbase Alpha (Polkadot Ecosystem) |
| **Wallet** | MetaMask / Talisman |

---

## 🎨 Artwork & 3D Models

MechForge features original 3D artwork generated with **Meshy.ai** and **ComfyUI**:

### 📦 Download Full Artwork Package (390 MB)

**IPFS CID:** `QmYwRzW7qqYUPp9s3vLbqcYf1eN5ffpSama9979dDnUeyA`

**Download Links:**
- 🔗 [Pinata Gateway](https://gateway.pinata.cloud/ipfs/QmYwRzW7qqYUPp9s3vLbqcYf1eN5ffpSama9979dDnUeyA)
- 🔗 [IPFS.io](https://ipfs.io/ipfs/QmYwRzW7qqYUPp9s3vLbqcYf1eN5ffpSama9979dDnUeyA)

### Package Contents:

| Asset | Description | Size |
|-------|-------------|------|
| `forge_environment.glb` | Industrial forge environment | 147MB |
| `scout_mech.glb` | Tier 1 - Scout reconnaissance mech | 16MB |
| `striker_mech.glb` | Tier 2 - Striker assault mech | 35MB |
| `vanguard_mech.glb` | Tier 3 - Vanguard tank mech | 40MB |
| `omega_mech.glb` | Tier 4 - Omega legendary mech | 20MB |
| `materials_icon.glb` | 3D resource/crafting icon | 85MB |
| **PBR Textures** | 20 texture maps (albedo, normal, roughness, metallic, emissive) | ~50MB |

All models are in GLB format with PBR materials, optimized for Three.js web viewing.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/TheMasterClaw/mechforge.git
cd mechforge

# Install dependencies
npm install

# Compile contracts
npx hardhat compile

# Run tests
npx hardhat test
```

### Local Development

```bash
# Start local Hardhat node
npx hardhat node

# Deploy to local network
npx hardhat run scripts/deploy.js --network localhost

# Start frontend (simple HTML)
# Open index.html in browser or serve with:
npx serve .
```

### Deploy to Moonbase Alpha

```bash
# Set up environment
cp .env.example .env
# Edit .env with your private key and RPC endpoint

# Deploy contracts
npm run deploy:moonbase

# Verify contracts
npm run verify:moonbase
```

---

## 📁 Project Structure

```
mechforge/
├── contracts/           # Solidity smart contracts
│   ├── Materials.sol    # ERC1155 material tokens
│   ├── MechNFT.sol      # ERC721 mech NFTs
│   ├── MechForgeStaking.sol  # Staking logic
│   ├── Forge.sol        # Mech forging
│   └── AIOracle.sol     # Randomness oracle
├── scripts/             # Deployment scripts
│   ├── deploy.js
│   └── verify-contracts.js
├── test/                # Contract tests
├── artwork/             # 3D GLB models and textures
│   ├── *.glb           # Mech models
│   ├── textures/       # Material textures
│   └── comfy/          # AI-generated artwork
├── frontend/           # React frontend (optional)
├── index.html          # Main landing page
├── aaa-game.html       # Full RTS battle arena
├── staking.html        # Staking dashboard
├── leaderboard.html    # Live rankings & activity
├── codex.html          # Mech codex with 3D viewer
├── history.html        # Battle history & replays
├── demo.html           # Interactive demo tour
├── pitch.html          # Investor pitch deck
├── analytics.html      # Protocol analytics
├── 404.html            # Error page
├── hardhat.config.js   # Hardhat configuration
└── package.json
```

---

## 🌐 Web Interface

MechForge features a comprehensive web interface with 9+ interactive pages:

| Page | Description | Key Features |
|------|-------------|--------------|
| **index.html** | Main landing | Navigation hub, feature overview |
| **staking.html** | Staking Dashboard | APY calculator, Chart.js analytics, material inventory |
| **leaderboard.html** | Rankings | Top commanders, 3D mech viewer, live activity feed |
| **codex.html** | Mech Codex | Interactive 3D models, stat comparisons, abilities |
| **history.html** | Battle History | Mission timeline, performance stats, rank progression |
| **demo.html** | Demo Tour | 5-step interactive walkthrough for presentations |
| **pitch.html** | Pitch Deck | 10-slide investor presentation with keyboard nav |
| **analytics.html** | Protocol Stats | TVL charts, token distribution, rarity stats |
| **aaa-game.html** | Battle Arena | Full RTS combat with Three.js 3D mechs |

---

## 💰 Revenue Model

| Fee Type | Rate | Description |
|----------|------|-------------|
| Protocol Fee | 5% | Charged on material → mech forging |
| Marketplace Fee | 2.5% | On secondary mech trades |
| Early Unstake | 10% | Penalty for breaking time-lock |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         USER                                │
└──────────────────┬──────────────────────────────────────────┘
                   │
        ┌──────────▼──────────┐
        │   MechForgeStaking  │◄── Stake/Unstake DOT
        └──────────┬──────────┘
                   │
       ┌───────────┼───────────┐
       ▼           ▼           ▼
┌─────────────┐ ┌─────────┐ ┌───────────┐
│  Materials  │ │ MechNFT │ │  Forge    │
│  (ERC1155)  │ │(ERC721) │ │           │
└─────────────┘ └────┬────┘ └───────────┘
                     │
              ┌──────▼──────┐
              │   AIOracle  │◄── Random drops
              └─────────────┘
```

---

## 🧪 Testing

```bash
# Run all tests
npx hardhat test

# Run with coverage
npx hardhat coverage

# Run specific test file
npx hardhat test test/Materials.test.js
```

---

## 🎨 Design System

- **Style:** Retro-Futurism
- **Colors:** 
  - Neon Blue: `#2563EB`
  - Orange CTA: `#F97316`
  - Dark Background: `#0F0F0F`
- **Typography:** Russo One, Chakra Petch
- **Effects:** Neon glow, CRT scanlines, cyberpunk aesthetic

---

## 🤝 Team

**Level 100 Studios**

A team of developers passionate about bringing gaming mechanics to DeFi.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- **Live Demo:** [Coming Soon]
- **Documentation:** [Wiki](https://github.com/TheMasterClaw/mechforge/wiki)
- **Issues:** [GitHub Issues](https://github.com/TheMasterClaw/mechforge/issues)

---

## 🙏 Acknowledgments

- Polkadot Hub team for the EVM-compatible infrastructure
- Moonbeam for testnet support
- OpenZeppelin for secure contract libraries

---

<p align="center">
  <strong>Built with 💜 for the Polkadot ecosystem</strong>
</p>
