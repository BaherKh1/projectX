pipeline {
  agent any

  triggers {
    // pollSCM('* * * * *')
  }

  stages {

    stage('Mail Notification') {
      steps {
        bat 'echo "Hello"'
        bat 'exit 1'
      }
    }

    stage('Test & Validate') {
      steps {
        script {
          if (fileExists('index.html')) {
            echo "index.html exists."
            bat 'findstr /I /C:"Baheeeeeer" index.html || exit 1'
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

  post {
    failure {
      script {
        def payload = """
        {
          "job": "${env.JOB_NAME}",
          "build": "${env.BUILD_NUMBER}",
          "url": "${env.BUILD_URL}",
          "status": "FAILURE"
        }
        """

        bat """
        curl -X POST http://localhost:5678/webhook/jenkins-failure ^
        -H "Content-Type: application/json" ^
        -d "${payload}"
        """
      }
    }
  }
}
