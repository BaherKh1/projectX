pipeline {
    agent any
    
    triggers {
        // This keeps it checking for your commits automatically
        pollSCM('* * * * *') 
    }

    stages {
        stage('Mail Notification') {
            steps {
                bat 'echo "Hello"'
            }
        }

        stage('Test & Validate') {
            steps {
                script {
                    if (fileExists('index.html')) {
                        echo "index.html exists."
                        // Fixed: Using 'bat' and 'findstr' for Windows
                        bat 'findstr /I /C:"Welcome" index.html'
                    } else {
                        error "index.html not found!"
                    }
                }
            }
        }

        stage('Archive') {
            steps {
                archiveArtifacts(artifacts: 'index.html', allowEmptyArchive: true)
            }
        }
    }
}
