pipeline {
  agent any
  stages {
    stage('Mail Notification') {
      steps {
        bat 'echo "Hello"'
      }
    }

    stage('Test & Validate') {
      steps {
        bat 'findstr /C:"Welcome" index.html'
      }
    }

    stage('Archive') {
      steps {
        archiveArtifacts(artifacts: 'index.html', allowEmptyArchive: true)
      }
    }

  }
}