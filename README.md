##CI/CD Pipeline Configuration and Integration:
##The CI/CD pipeline is implemented using Jenkins and configured as follows:
Pipeline Steps:
•	Checkout Stage: Fetches the latest code from the main branch.
•	Docker Login Stage: Logs into Docker Hub using credentials stored in Jenkins.
•	Build and Push Images: Builds and pushes Docker images using Docker Compose.
•	Run Containers: Deploys containers with Docker Compose in detached mode.
##Jenkinsfile Configuration:
pipeline {
    agent any
    environment {
        BUILD_ID = "${env.BUILD_ID}"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Ta-Batool/Bookstore.git'
            }
        }
        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    powershell 'docker login -u $env:DOCKER_USER -p $env:DOCKER_PASS'
                }
            }
        }
        stage('Build and Push Images') {
            steps {
                powershell 'docker-compose build'
                powershell 'docker-compose push'
            }
        }
        stage('Run Containers') {
            steps {
                powershell '''
                    docker-compose down
                    docker-compose up -d
                '''
            }
        }
    }
    post {
        always {
            echo 'Pipeline execution complete.'
        }
        success {
            echo 'Deployment succeeded!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.'
        }
    }
}
##Triggers:
•	The pipeline is triggered on a code push to the main branch.
•	Manual triggers are enabled for deployment.
CI/CD Pipeline Execution:
![image](https://github.com/user-attachments/assets/54998e57-51ae-4175-9e08-ad906a857633)
 
 
Dockerization:
The application is dockerized to ensure consistent deployment across different environments. Includes docker files for the both frontend and the backend and a docker-compose.yml file for the communication between the two containers 
Troubleshooting Challenges and solutions:
Issue 1: Docker Image Push Failure
•	Challenge: Jenkins failed to push the Docker image to Docker Hub.
•	Resolution:
o	Checked Docker credentials in Jenkins and updated them in Manage Credentials.
o	Verified docker login manually from the Jenkins server.
