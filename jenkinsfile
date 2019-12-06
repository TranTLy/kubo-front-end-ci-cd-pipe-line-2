pipeline{
    agent any
    stages{
        stage('install'){
            steps{
                bat 'npm install'
            }
        }
        stage('test'){
            steps{
                bat 'npm run test'
            }
        }
        stage('start'){
            steps{
                bat 'npm start'
            }
        }
    }
} 
