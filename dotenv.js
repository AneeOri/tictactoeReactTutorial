// Error ->import fs from 'node:fs/promises'  esto no puede ser await 
//El proceso debe de ser Sync Sincrono porque requiere variables de entorno
// tiene que parar el flujo de ejecucuón  porque no puede traer valores "undefined"
//la ejecucion de config() se ejecuta una sola vez al iniciar la applicacion solo cuando se empieza de 0

//a menos que se llame nuchas veces como en ProcessRequest


export function config ({path = '.env'} = {}){
    try {
        const env = fs.readFile(path, 'utf8')
        //BÁSICO: primero saber separar una cadena de texto por cada una de sus lineas y transformarlo en un array
        const Lines = env.split('\n')

        Lines.forEach(line => {
            const [key, ...value] = line.split('=')
            const joinedValue = value.join('=')

            /**
             * joinedValue[0] === '"' &&
             * joinedValue[joinedValue.lenght -1] === '='
             */

            const hasQuotes = joinedValue.startsWith('"') &&
                              joinedValue.endsWith('"')

            const valueToStore = hasQuotes
                               ? joinedValue.slice(1, -1)
                               : joinedValue 
            
             process.env[key] = valueToStore                  
        })


    } catch (error) {
        
    }
}

//soporte para los demas modulos
const dotenv = {
    config
}

export default dotenv