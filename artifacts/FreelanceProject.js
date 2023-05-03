const abi=[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "freelancer",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			}
		],
		"name": "BidWithdrawn",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_projectId",
				"type": "uint256"
			}
		],
		"name": "cancelProject",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_projectId",
				"type": "uint256"
			}
		],
		"name": "completeProject",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_employerAdd",
				"type": "address"
			}
		],
		"name": "deleteEmployer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_freelancerAdd",
				"type": "address"
			}
		],
		"name": "deleteFreelancer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_projectId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_freelancerAdd",
				"type": "address"
			}
		],
		"name": "finalizeFreelancer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "freelancer",
				"type": "address"
			}
		],
		"name": "FreelancerFinalized",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "_technologies",
				"type": "string[]"
			},
			{
				"internalType": "uint256",
				"name": "_budget",
				"type": "uint256"
			}
		],
		"name": "postProject",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "freelancer",
				"type": "address"
			}
		],
		"name": "ProjectCancelled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "freelancer",
				"type": "address"
			}
		],
		"name": "ProjectCompleted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "employer",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			}
		],
		"name": "ProjectPosted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "registerEmployer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "_skills",
				"type": "string[]"
			}
		],
		"name": "registerFreelancer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "freelancer",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			}
		],
		"name": "RequestSent",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_projectId",
				"type": "uint256"
			}
		],
		"name": "sendRequest",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_employerAdd",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "updateEmployer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_freelancerAdd",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "_skills",
				"type": "string[]"
			}
		],
		"name": "updateFreelancer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_projectId",
				"type": "uint256"
			}
		],
		"name": "withdrawBid",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_projectId",
				"type": "uint256"
			}
		],
		"name": "amISelected",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "employers",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "freelancers",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "projects",
		"outputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "budget",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "employer",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isCancelled",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isComplete",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "freelancer",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isFinalized",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

module.exports=abi;