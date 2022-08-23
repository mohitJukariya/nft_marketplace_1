import React, { Component } from 'react'
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import KryptoBird from './abis/KryptoBird.json';
import Navbar from './components/Navbar';
import Main from './components/Main';



class App extends Component {

  async componentDidMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  // function to detect ethereum provider
  async loadWeb3() {
    const provider = await detectEthereumProvider();

    if(provider){
      console.log('ethereum wallet is connected');
      window.web3 = new Web3(provider);
    }
    else{
      console.log('No ethereum wallet detected');
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3

    // load accounts
    const accounts = await web3.eth.getAccounts();
    this.setState({account: accounts[0]})
    // load Kryptobirdz contract
    const networkID = await web3.eth.net.getId()
    const networkData = await KryptoBird.networks[networkID]

    if(networkData) {
      const abi = KryptoBird.abi;
      const address = networkData.address;
      const contract = new web3.eth.Contract(abi, address)
      this.setState({contract})

      // load totalSupply
      const totalSupply = await contract.methods.totalSupply().call()
      this.setState({totalSupply})

      // set up an array to keep track of tokens
      for(let i = 1; i <= totalSupply; i++){
        const KryptoBird = await contract.methods.KryptoBirdz(i-1).call();
        this.setState({
          kryptoBirdz: [...this.state.kryptoBirdz, KryptoBird]
        })
      }
    }
    else {
      window.alert("Smart contract not deployed")
    }
  }

  // setting up mint function
  mint = (kryptoBird) => {
    this.state.contract.methods.mint(kryptoBird).send({from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({
        kryptoBirdz: [...this.state.kryptoBirdz, KryptoBird]
      })
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      contract: null,
      totalSupply: 0,
      kryptoBirdz: []
    }
  }

  render() {
    return (
      <div>
        {console.log(this.state.kryptoBirdz)}
        <Navbar account = {this.state.account}/>
        <Main mint = {this.mint} kryptoBirdz={this.state.kryptoBirdz}/>
      </div>
    )
  }
}

export default App