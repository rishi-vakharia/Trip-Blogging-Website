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

        stage('Stage 2: Test backend on Jenkins server') {
            steps {
                dir('backend') {
                    sh "npm install"
                    sh "npm test"
                }
            }
        }

        stage('Stage 3: Build frontend docker image') {
            steps {
                echo "Build frontend docker image"
                sh "docker build -t rishivakharia/frontend-image:latest frontend/"
            }
        }

        stage('Stage 4: Build backend docker image') {
            steps {
                echo "Build backend docker image"
                sh "docker build -t rishivakharia/backend-image:latest backend/"
            }
        }

        stage('Stage 5: Push frontend & backend images to Docker Hub') {
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
        
        stage('Stage 6: Remove dangling images') {
            steps {
                script {
                    sh 'docker image prune -f'
                }
            }
        }

        stage('Stage 7: Deploy containers on target machines using Ansible') {
            steps {
                ansiblePlaybook installation: 'Ansible',
                playbook: 'ansible/deploy_containers.yml',
                inventory: 'ansible/inventory',
                credentialsId: 'LocalhostUserCredentials'
            }
        }
    }
}