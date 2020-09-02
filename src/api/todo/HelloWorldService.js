import axios from "axios"

class HelloWorldService {
    executeHelloWorldService(){
        return axios.get('http://localhost:8080/hello-world');
        //console.log('Hello World Service')
    }

    executeHelloWorldBeanService(){
        return axios.get('http://localhost:8080/hello-world-bean');
        //console.log('Hello World Service')
    }

    executeHelloWorldPathVariableService(name){
        // let username = 'in28minutes'
        // let password = 'dummy'

        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        return axios.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`
        // ,
        //     {
        //         headers : {
        //             authorization: basicAuthHeader
        //         }
        //     }
        );
        //console.log('Hello World Service')
    }
}

export default new HelloWorldService()