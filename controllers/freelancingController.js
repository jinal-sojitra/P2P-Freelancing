require('dotenv').config();
const {ethers} =require('ethers')
const provider= new ethers.providers.JsonRpcProvider(process.env.PROVIDER);
const contractAddress=process.env.CONTRACT_ADDRESS;
const abi=require('../artifacts/FreelanceProject')

const freelancer_privateKey = process.env.FREELANCER_PRIVATE_KEY;
const freelancer_signer = new ethers.Wallet(freelancer_privateKey, provider);
const freelancer_contract = new ethers.Contract(contractAddress, abi, freelancer_signer);

const privateKey = process.env.WALLET_PRIVATE_KEY;
const signer = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(contractAddress, abi, signer);
module.exports = {
    registerEmployer: async (req, res) => {
        const { name } = req.body;
        const tx = await contract.registerEmployer(name);
        await tx.wait();
        console.log("You have registered successfully!");

    res.send('You have registered successfully!');
    },

    registerFreelancer: async (req,res) => {
    const {name,skills} = req.body;
    try {
      const tx = await freelancer_contract.registerFreelancer(name, skills);
      await tx.wait();
      console.log("You have registered successfully!");
    }
    catch (error) {
        console.error('Error:', error);
    }
    res.send("You have registered successfully!");
    },

    postProject: async (req, res) => {
        const { title, description, technologies, budget } = req.body;
        const tx = await contract.postProject(title, description,technologies, budget);
        await tx.wait();
        console.log("Project posted successfully!");
    
      
        res.send('Project posted successfully!');
    },

    sendRequest: async (req, res) => {
        const { projectId } = req.body;
             const tx = await freelancer_contract.sendRequest(projectId, { value: req.body.bid });
             await tx.wait();
             console.log("Request sent successfully!");
             res.send('Request sent successfully!');
    },

    finalizeFreelancer: async (req, res) => {
        try {
            const {projectId,freelancerAdd} = req.body;
            const tx = await contract.finalizeFreelancer(projectId, freelancerAdd);
            await tx.wait();
            console.log("Freelancer has been finalized");
            res.send('Freelancer has been finalized');
          } catch (error) {
            console.error(error);
            res.status(500).send('Something went wrong');
          }
    },

    amISelected: async (req, res) => {
        try {
            const {projectId} = req.body;
            const isFreelancer = await freelancer_contract.amISelected(projectId);
            res.send({ isFreelancer });
          } catch (error) {
            console.error(error);
            res.status(500).send('Something went wrong');
          }
    },

    getFreelancerRequest: async (req, res) => {
        try {
            const {projectId,requestIndex} = req.body;
            const freelancerRequest = await contract.getFreelancerRequest(projectId, requestIndex);
            res.json({ freelancerRequest });
          } catch (error) {
            console.error(error);
            res.status(500).send('Something went wrong');
          }
    },

    completeProject: async (req, res) => {
        const {projectId} = req.body;
        const tx = await contract.completeProject(projectId);
        await tx.wait();
        
        res.send('Project has been completed');
    },

    cancelProject: async (req, res) => {
        try {
            const {projectId} = req.body;
        
            const tx = await contract.cancelProject(projectId);
            await tx.wait();
        
            res.send('Project has been completed');
          } catch (error) {
            console.error(error);
            res.status(500).send('Something went wrong');
          }
    },

    deleteFreelancer: async (req, res) => {
        const {freelancerAddress} = req.body;
        const tx = await contract.deleteFreelancer(freelancerAddress);
        await tx.wait();
        
        res.send('This freelancer has been deleted!');
    },

    deleteEmployer: async (req, res) => {
        const {employerAddress} = req.body;
        const tx = await contract.deleteEmployer(employerAddress);
        await tx.wait();
        
        res.send('This Employer has been deleted!');
    },

    updateFreelancer: async (req, res) => {
      const {freelancerAddress, name, skills} = req.body;
      const tx = await contract.updateFreelancer(freelancerAddress, name, skills);
      await tx.wait();
      
      res.send('Freelancer details has been updated!');
  },

    updateEmployer: async (req, res) => {
      const {employerAddress, name} = req.body;
      const tx = await contract.updateEmployer(employerAddress, name);
      await tx.wait();
      
      res.send('Employer details has been updated!');
  },

    getFreelancer: async (req, res) => {
        const {freelancerAddress} = req.body;
        const freelancerDetails = await contract.getFreelancer(freelancerAddress);
        res.json({ freelancerDetails });
    },  

    withdrawBid: async(req,res) =>{
        const {projectId} = req.body;
        const gasLimit = await freelancer_contract.estimateGas.withdrawBid(projectId);
        const tx = await freelancer_contract.withdrawBid(projectId, {gasLimit: gasLimit});
        await tx.wait();
        res.send('Bid has been withdrawn!'); 
    }
}
