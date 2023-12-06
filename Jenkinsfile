pipeline {
    environment {
        fe_image = ""
        be_image = ""
    }
    agent any
    stages {
        
        stage('Stage 1: Pull code from Github') {
            steps {
                git branch: 'main', url: 'https://github.com/rishi-vakharia/SPE-FinalProj.git'
            }
        }

        stage('Stage 2: Build frontend docker image') {
            steps {
                echo "Build frontend docker image"
                sh "docker build -t rishivakharia/frontend-image:latest frontend/"
            }
        }

        stage('Stage 3: Build backend docker image') {
            steps {
                echo "Build backend docker image"
                sh "docker build -t rishivakharia/backend-image:latest backend/"
            }
        }

        stage('Stage 4: Push frontend & backend images to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('', 'DockerHubCredentials') {
                        
                        echo "Push frontend Docker Image to Docker Hub"
                        sh "docker push rishivakharia/frontend-image:latest"

                        echo "Push backend Docker Image to Docker Hub"
                        sh "docker push rishivakharia/backend-image:latest"

                    }
                }
            }
        }
        
        stage('Stage 5: Remove dangling images') {
            steps {
                script {
                    sh 'docker image prune -f'
                }
            }
        }

        // stage('Stage 6: Pull image from Docker Hub and deploy on hosts using Ansible') {
        //     steps {
        //         ansiblePlaybook installation: 'Ansible',
        //         playbook: 'Deployment/deploy.yml',
        //         inventory: 'Deployment/inventory',
        //         credentialsId: 'LocalhostUserCredentials'
        //     }
        // }
    }
}