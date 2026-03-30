pipeline {
  agent any

  triggers {
    pollSCM('* * * * *')
  }

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

            // This will FAIL the build if "Baher" is NOT found
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

    success {
      echo "Build succeeded ✅"
    }

    failure {
      script {
        def payload = """
        {
          "job": "${env.JOB_NAME}",
          "build": "${env.BUILD_NUMBER}",
          "url": "${env.BUILD_URL}",
          "status": "FAILURE",
          "branch": "${env.GIT_BRANCH}",
          "commit": "${env.GIT_COMMIT}",
          "message": "Keyword 'Baher' not found in index.html"
        }
        """

        // Send failure data to n8n webhook
        bat """
        curl -X http://localhost:5678/webhook-test/jenkins-failure ^
        -H "Content-Type: application/json" ^
        -d "${payload}"
        """
      }
    }

    always {
      echo "Pipeline finished."
    }
  }
}
