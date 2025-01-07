# CI/CD Pipeline Configuration and Integration:
## The CI/CD pipeline is implemented using Jenkins and configured as follows:
Pipeline Steps:
•	Checkout Stage: Fetches the latest code from the main branch.
•	Docker Login Stage: Logs into Docker Hub using credentials stored in Jenkins.
•	Build and Push Images: Builds and pushes Docker images using Docker Compose.
•	Run Containers: Deploys containers with Docker Compose in detached mode.
## Jenkinsfile Configuration:
## Triggers:
•	The pipeline is triggered on a code push to the main branch.
•	Manual triggers are enabled for deployment.
CI/CD Pipeline Execution:
![image](https://github.com/user-attachments/assets/54998e57-51ae-4175-9e08-ad906a857633)
![image](https://github.com/user-attachments/assets/9f025f03-4972-4ac3-9bac-51e561e42fb3)

 
 
## Dockerization:
The application is dockerized to ensure consistent deployment across different environments. Includes docker files for the both frontend and the backend and a docker-compose.yml file for the communication between the two containers 
