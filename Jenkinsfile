pipeline {
    agent any
    stages {
        stage('Mail Notification') {
            steps {
                // This requires SMTP configured in Manage Jenkins -> System
                mail(subject: 'Build Started', body: 'Commits detected, starting build...', to: 'baher.khaldii@gmail.com')
            }
        }

        stage('Test & Validate') {
            steps {
                script {
                    if (fileExists('index.html')) {
                        echo "index.html exists."
                        // Check for content; -q means 'quiet' (just returns exit code)
                        sh 'grep -q "Welcome" index.html'
                        echo "Content validation passed."
                    } else {
                        error "index.html not found!"
                    }
                }
            }
        }
        
        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'index.html', allowEmptyArchive: true
            }
        }
    }
}
