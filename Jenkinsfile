pipeline {
  agent any
  stages {
    stage('Mail Notification') {
      steps {
        sh 'echo "Hello"'
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
        archiveArtifacts(artifacts: 'index.html', allowEmptyArchive: true)
      }
    }

  }
}