const fs= require('fs');

const colors = require('colors');

const crearArchivo= async(base = 5, listar = false, hasta = 10)=>{
   
    try {
       
        let consola = '', salida = '';

        for (let i = 1; i <= hasta; i++) {
        salida +=  `${base} x ${i} = ${base * i}\n`;

        consola +=  `${base} ${'x'.cyan} ${i} ${'='.magenta} ${colors.yellow(base * i)}\n`;
            
        }
        if (listar) {
            console.log(consola); 
        }
        
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`,salida);
        
        return(`tabla-${base}.txt`);   
         
    } catch (error) {
        
        throw error;
    }
       
                
         

    

}

module.exports = {
    crearArchivo
}