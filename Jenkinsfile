#!groovy

/*
The MIT License

Copyright (c) 2015-, CloudBees, Inc., and a number of other of contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/


//this has to be taken as a DEMO
node('docker') {
    deleteDir()
    try {
        stage('Checkout'){
          checkout scm
        }

        stage('Build'){
           echo "Building..."
        }

        stage('Test') {
            //generally you do not give the full path, this is a quick and dirty fix!!!
            sh '/usr/local/bin/docker run -v $(PWD):/test -w /test node:8 yarn install'
            sh '/usr/local/bin/docker run -v $(PWD):/test -w /test node:8 yarn test:ci'
        }
        
        stage('Deploy'){
            echo 'Deploying...'
        }

    }
    catch (err) {

        currentBuild.result = "FAILURE"
        throw err
    }
    finally{
                //import allure results
                script {
                    	allure([
        			    includeProperties: true,
        			    jdk: '',
        			    properties: [],
        			    reportBuildPolicy: 'ALWAYS',
        			    results: [[path: 'report/allure-results']]
                    	])
                }
    }

}
