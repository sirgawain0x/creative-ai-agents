/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  LaunchToken,
  LaunchTokenInterface,
} from "../../contracts/LaunchToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "totalSupply_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fid_",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "imageUrl_",
        type: "string",
      },
      {
        internalType: "string",
        name: "socialProof_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "imageUrl",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "socialProof",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610edc380380610edc83398101604081905261002f9161034c565b838787600361003e83826104a7565b50600461004b82826104a7565b5050506001600160a01b03811661007d57604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b610086816100bc565b50610091848661010e565b600783905560066100a283826104a7565b5060086100af82826104a7565b505050505050505061058d565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166101385760405163ec442f0560e01b815260006004820152602401610074565b61014460008383610148565b5050565b6001600160a01b0383166101735780600260008282546101689190610566565b909155506101e59050565b6001600160a01b038316600090815260208190526040902054818110156101c65760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610074565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661020157600280548290039055610220565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161026591815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261029957600080fd5b81516001600160401b03808211156102b3576102b3610272565b604051601f8301601f19908116603f011681019082821181831017156102db576102db610272565b81604052838152602092508660208588010111156102f857600080fd5b600091505b8382101561031a57858201830151818301840152908201906102fd565b6000602085830101528094505050505092915050565b80516001600160a01b038116811461034757600080fd5b919050565b600080600080600080600060e0888a03121561036757600080fd5b87516001600160401b038082111561037e57600080fd5b61038a8b838c01610288565b985060208a01519150808211156103a057600080fd5b6103ac8b838c01610288565b975060408a015196506103c160608b01610330565b955060808a0151945060a08a01519150808211156103de57600080fd5b6103ea8b838c01610288565b935060c08a015191508082111561040057600080fd5b5061040d8a828b01610288565b91505092959891949750929550565b600181811c9082168061043057607f821691505b60208210810361045057634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156104a2576000816000526020600020601f850160051c8101602086101561047f5750805b601f850160051c820191505b8181101561049e5782815560010161048b565b5050505b505050565b81516001600160401b038111156104c0576104c0610272565b6104d4816104ce845461041c565b84610456565b602080601f83116001811461050957600084156104f15750858301515b600019600386901b1c1916600185901b17855561049e565b600085815260208120601f198616915b8281101561053857888601518255948401946001909101908401610519565b50858210156105565787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8082018082111561058757634e487b7160e01b600052601160045260246000fd5b92915050565b6109408061059c6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a9059cbb11610066578063a9059cbb146101d6578063aba83150146101e9578063dd62ed3e146101f1578063f2fde38b1461022a57600080fd5b806370a0823114610180578063715018a6146101a95780638da5cb5b146101b357806395d89b41146101ce57600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce567146101605780633257b4f31461016f57806350b630871461017857600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b61010261023d565b60405161010f9190610789565b60405180910390f35b61012b6101263660046107f4565b6102cf565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b36600461081e565b6102e9565b6040516012815260200161010f565b61013f60075481565b61010261030d565b61013f61018e36600461085a565b6001600160a01b031660009081526020819052604090205490565b6101b161039b565b005b6005546040516001600160a01b03909116815260200161010f565b6101026103af565b61012b6101e43660046107f4565b6103be565b6101026103cc565b61013f6101ff36600461087c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101b161023836600461085a565b6103d9565b60606003805461024c906108af565b80601f0160208091040260200160405190810160405280929190818152602001828054610278906108af565b80156102c55780601f1061029a576101008083540402835291602001916102c5565b820191906000526020600020905b8154815290600101906020018083116102a857829003601f168201915b5050505050905090565b6000336102dd81858561041c565b60019150505b92915050565b6000336102f785828561042e565b6103028585856104ac565b506001949350505050565b6008805461031a906108af565b80601f0160208091040260200160405190810160405280929190818152602001828054610346906108af565b80156103935780601f1061036857610100808354040283529160200191610393565b820191906000526020600020905b81548152906001019060200180831161037657829003601f168201915b505050505081565b6103a361050b565b6103ad6000610538565b565b60606004805461024c906108af565b6000336102dd8185856104ac565b6006805461031a906108af565b6103e161050b565b6001600160a01b03811661041057604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b61041981610538565b50565b610429838383600161058a565b505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146104a6578181101561049757604051637dc7a0d960e11b81526001600160a01b03841660048201526024810182905260448101839052606401610407565b6104a68484848403600061058a565b50505050565b6001600160a01b0383166104d657604051634b637e8f60e11b815260006004820152602401610407565b6001600160a01b0382166105005760405163ec442f0560e01b815260006004820152602401610407565b61042983838361065f565b6005546001600160a01b031633146103ad5760405163118cdaa760e01b8152336004820152602401610407565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0384166105b45760405163e602df0560e01b815260006004820152602401610407565b6001600160a01b0383166105de57604051634a1406b160e11b815260006004820152602401610407565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156104a657826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161065191815260200190565b60405180910390a350505050565b6001600160a01b03831661068a57806002600082825461067f91906108e9565b909155506106fc9050565b6001600160a01b038316600090815260208190526040902054818110156106dd5760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610407565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661071857600280548290039055610737565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161077c91815260200190565b60405180910390a3505050565b60006020808352835180602085015260005b818110156107b75785810183015185820160400152820161079b565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146107ef57600080fd5b919050565b6000806040838503121561080757600080fd5b610810836107d8565b946020939093013593505050565b60008060006060848603121561083357600080fd5b61083c846107d8565b925061084a602085016107d8565b9150604084013590509250925092565b60006020828403121561086c57600080fd5b610875826107d8565b9392505050565b6000806040838503121561088f57600080fd5b610898836107d8565b91506108a6602084016107d8565b90509250929050565b600181811c908216806108c357607f821691505b6020821081036108e357634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156102e357634e487b7160e01b600052601160045260246000fdfea264697066735822122029781a58d2887c5ec7fbe5e7e309dd3d3ec8674731facff787deb03e896bc12e64736f6c63430008190033";

type LaunchTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LaunchTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LaunchToken__factory extends ContractFactory {
  constructor(...args: LaunchTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name_: string,
    symbol_: string,
    totalSupply_: BigNumberish,
    owner_: AddressLike,
    fid_: BigNumberish,
    imageUrl_: string,
    socialProof_: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      name_,
      symbol_,
      totalSupply_,
      owner_,
      fid_,
      imageUrl_,
      socialProof_,
      overrides || {}
    );
  }
  override deploy(
    name_: string,
    symbol_: string,
    totalSupply_: BigNumberish,
    owner_: AddressLike,
    fid_: BigNumberish,
    imageUrl_: string,
    socialProof_: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      name_,
      symbol_,
      totalSupply_,
      owner_,
      fid_,
      imageUrl_,
      socialProof_,
      overrides || {}
    ) as Promise<
      LaunchToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): LaunchToken__factory {
    return super.connect(runner) as LaunchToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LaunchTokenInterface {
    return new Interface(_abi) as LaunchTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): LaunchToken {
    return new Contract(address, _abi, runner) as unknown as LaunchToken;
  }
}
