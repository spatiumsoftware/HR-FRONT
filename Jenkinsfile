pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-cred')
        DOCKERHUB_REPO = 'abdelrahman9655/hr-front'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/spatiumsoftware/HR-FRONT.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build --prod'
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    dockerImage = docker.build("${env.DOCKERHUB_REPO}:${env.BUILD_ID}")
                }
            }
        }

        stage('Docker Push') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'DOCKERHUB_CREDENTIALS') {
                        dockerImage.push()
                    }
                }
            }
        }

        stage('Clean Up') {
            steps {
                sh 'docker rmi ${env.DOCKERHUB_REPO}:${env.BUILD_ID}'
            }
        }
    }
}
