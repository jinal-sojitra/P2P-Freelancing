// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FreelancePlatform {
    
    struct Project {
        string title;
        string description;
        string[] technologies;
        uint256 budget;
        address employer;
        address[] freelancerRequests;
        bool isCancelled;
        bool isComplete;
        address freelancer;
        bool isFinalized;
    }
    
    struct Employer {
        string name;
        Project[] postedProjects;
    }
    
    struct Freelancer {
        string name;
        string[] skills;
        Project[] completedProjects;
    } 

    modifier onlyEmployer(uint256 _projectId) {
        Project storage project = projects[_projectId];
        require(msg.sender == project.employer, "Only the employer can perform this action");
        _;
    } 
    
    mapping(address => Employer) public employers;
    mapping(address => Freelancer) public freelancers;
    Project[] public projects;

    event ProjectPosted(address indexed employer, uint256 indexed projectId);
    event RequestSent(address indexed freelancer, uint256 indexed projectId);
    event FreelancerFinalized(uint256 indexed projectId, address indexed freelancer);
    event ProjectCompleted(uint256 indexed projectId, address indexed freelancer);
    event ProjectCancelled(uint256 indexed projectId, address indexed freelancer);

    function registerEmployer(string memory _name) public {
        employers[msg.sender].name=_name; 
    }

    function registerFreelancer(string memory _name, string[] memory _skills) public {
        freelancers[msg.sender].name=_name;
        freelancers[msg.sender].skills=_skills;
    }

    function updateEmployer(address _employerAdd, string memory _name ) public {
       employers[_employerAdd].name=_name; 
    }

    function updateFreelancer(address _freelancerAdd, string memory _name, string[] memory _skills ) public {
        freelancers[_freelancerAdd].name=_name;
        freelancers[_freelancerAdd].skills=_skills;
    }

    function deleteEmployer(address _employerAdd) public {
        delete employers[_employerAdd];
    }

    function deleteFreelancer(address _freelancerAdd) public {
        delete freelancers[_freelancerAdd];
    }

    function postProject(string memory _title, string memory _description, string[] memory _technologies , uint256 _budget) public {
        require(_budget > 0, "Budget must be greater than zero.");
        
        Project memory newProject = Project({
            title: _title,
            description: _description,
            technologies: _technologies,
            budget: _budget,
            employer: msg.sender,
            freelancerRequests: new address[](0),
            isCancelled: false,
            isComplete: false,
            freelancer: address(0),
            isFinalized: false
        });
        
        projects.push(newProject);
        employers[msg.sender].postedProjects.push(newProject);
        emit ProjectPosted(msg.sender, projects.length - 1);
    }

    function getProjects() public view returns (Project[] memory) {
        return projects;
    }
    
    function sendRequest(uint256 _projectId) public {
        require(_projectId < projects.length, "Invalid project ID.");
        require(msg.sender != projects[_projectId].employer, "Employer cannot send request.");
        projects[_projectId].freelancerRequests.push(msg.sender);
        //freelancers[msg.sender].requestedProjects.push(projects[_projectId]);
        emit RequestSent(msg.sender, _projectId);  
    }
    //
    function finalizeFreelancer(uint _projectId, uint _freelancerId) public onlyEmployer(_projectId){
        Project storage project = projects[_projectId];
        require(msg.sender == project.employer, "Only the employer can finalize a freelancer for this project");
    
        require(!project.isFinalized, "This project has already been finalized");
        
        // Set the freelancer for the project and mark the project as finalized
        project.freelancer = project.freelancerRequests[_freelancerId] ;
        project.isFinalized = true;
        emit FreelancerFinalized(_projectId, project.freelancer);
    } 

    function completeProject(uint256 _projectId) public onlyEmployer(_projectId) payable{
        Project storage project = projects[_projectId];
        require(_projectId < projects.length, "Invalid project ID.");
        require(msg.sender == project.employer, "Only employer can complete project.");
        require(!project.isComplete, "Project already completed.");
        
        // Transfer Ether to freelancer
        require(msg.value==project.budget,"Please provide enough ethers");
        payable(project.freelancer).transfer(project.budget);
        project.isComplete = true;
        freelancers[project.freelancer].completedProjects.push(projects[_projectId]);

        delete projects[_projectId];
        emit ProjectCompleted(_projectId, project.freelancer);
    }

    function cancelProject(uint256 _projectId) onlyEmployer(_projectId) public {
        Project storage project = projects[_projectId];
        require(_projectId < projects.length, "Invalid project ID.");
        require(msg.sender == project.employer, "Only employer can complete project.");
        require(!project.isComplete || !project.isCancelled, "Project already completed.");
        
        project.isCancelled = true;
        delete projects[_projectId];
        emit ProjectCancelled(_projectId, project.freelancer);
    }

    function amISelected(uint _projectId) public view returns (bool) {
        Project storage project = projects[_projectId];
        require(project.isFinalized, "This project has not been finalized yet");
        return (project.freelancer == msg.sender && project.isFinalized);
    }

    function getFreelancerRequest(uint256 _projectId, uint256 _requestIndex) public view returns (address) {
        return projects[_projectId].freelancerRequests[_requestIndex];
    }
}