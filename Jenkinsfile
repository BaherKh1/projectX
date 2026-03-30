pipeline {
  agent any
  stages {
    stage('Mail') {
      steps {
        mail(subject: 'Commit', body: 'Commits done', to: 'baher.khaldii@gmail.com')
      }
    }

    stage('Test') {
      steps {
        archiveArtifacts(allowEmptyArchive: true, artifacts: 'a')
        sh '''pipeline {
    agent any
    stages {
        stage(\'Test Index HTML\') {
            steps {
                script {
                    // Check if file exists
                    if (fileExists(\'index.html\')) {
                        echo "index.html exists."
                        
                        // Validate content using grep (returns exit code 0 if found)
                        sh \'grep -q "Welcome" index.html || (echo "Content missing!" && exit 1)\'
                        echo "Content validation passed."
                    } else {
                        error "index.html not found!"
                    }
                }
            }
        }
    }
}
'''
        }
      }

    }
  }