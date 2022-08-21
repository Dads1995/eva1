document.getElementById("vuelovueg").style.display = "none";
document.getElementById("vueloidag").style.display = "none"; 
document.getElementById("ida").style.display = "none";
document.getElementById("vuelta").style.display = "none";


document.getElementById('i').addEventListener("click", function(evt){
    document.getElementById("ida").style.display = "block";
    document.getElementById("vuelta").style.display = "none";
    
});

document.getElementById('iv').addEventListener("click", function(evt){
    document.getElementById("ida").style.display = "block";
    document.getElementById("vuelta").style.display = "block";
});

document.getElementById('btn').addEventListener("click", function(evt){
    let valida = 0;

    if(document.getElementById("ori").value == 0){
        alert('Seleccione el Origen del Vuelo');
    }else if(document.getElementById("des").value == 0){
        alert('Seleccione el Destino del Vuelo');
    }else if(document.getElementById("ori").value == document.getElementById("des").value){
        alert('El Origen y el Destino Deben ser Distintos');
        document.getElementById("ori").value = 0;
        document.getElementById("des").value = 0;
    }else if(document.getElementById('i').checked != true && document.getElementById('iv').checked != true){
        alert("Seleccionar el Tipo de Viaje");
    }else if(document.getElementById("fida").value == ''){
        alert('Ingresar la Fecha de Ida del Viaje');
    }else if(document.getElementById("vuelta").style.display ==  "block" &&  document.getElementById("fvuelta").value == ''){
        alert('Ingresar la Fecha de Vuelta del Viaje');
    }else if(document.getElementById("vuelta").style.display ==  "block"){
        if(document.getElementById("fvuelta").value < document.getElementById("fida").value){
            alert('La Fecha de Vuelta no Puede ser menor que la de Ida');
            document.getElementById("fvuelta").value = '';
        }else if(document.getElementById("adultos").value == 0){
            alert('Ingresar la Cantidad de Pasajeros Adultos');
        }else{
            alert('Buscando Vuelos Disponibles');
            valida = 1;
        }    
    }else{
        if(document.getElementById("adultos").value == 0){
            alert('Ingresar la Cantidad de Pasajeros Adultos');
        }else{
            alert('Buscando Vuelos Disponibles');
            valida = 1;
        }    
    }

    if(valida == 1){
        if(document.getElementById("vuelta").style.display ==  "block"){
            document.getElementById("vuelovueg").style.display = "block";
            document.getElementById("vueloidag").style.display = "block";
            
            //valores Ida
            document.getElementById("fidam").value = document.getElementById("fida").value;
            document.getElementById("ovuem").value = document.getElementById("ori").value;
            document.getElementById("dvuem").value = document.getElementById("des").value;
            document.getElementById("ca").value = document.getElementById("adultos").value;
            document.getElementById("cn").value = document.getElementById("niño").value;
            const CA = 45000;
            const CN = 28000;
            let valorA = 0;
            let valorN = 0;
            let total = 0;
            if(document.getElementById("niño").value == 0){
                document.getElementById("vn").value = '0';
                
                valorA = CA * document.getElementById("adultos").value;
                document.getElementById("va").value = valorA;
                total = valorA + valorN;
                document.getElementById("vt").value = total;
            }else{
                valorN = CN * document.getElementById("niño").value;
                document.getElementById("vn").value = valorN;
                valorA = CA * document.getElementById("adultos").value;
                document.getElementById("va").value = valorA;
                total = valorA + valorN;
                document.getElementById("vt").value = total;
            }

            //valores Vuelta
            document.getElementById("fvuemv").value = document.getElementById("fvuelta").value;
            document.getElementById("ovuemv").value = document.getElementById("des").value;
            document.getElementById("dvuemv").value = document.getElementById("ori").value;
            document.getElementById("cav").value = document.getElementById("adultos").value;
            document.getElementById("cnv").value = document.getElementById("niño").value;
            const CAV = 49500;
            const CNV = 24700;
            let valorAV = 0;
            let valorNV = 0;
            let totalV = 0;
            if(document.getElementById("niño").value == 0){
                document.getElementById("vnv").value = '0';
                valorAV = CAV * document.getElementById("adultos").value;
                document.getElementById("vav").value = valorAV;
                totalV = valorAV + valorNV;
                document.getElementById("vtv").value = totalV;
            }else{
                valorNV = CNV * document.getElementById("niño").value;
                document.getElementById("vnv").value = valorNV;
                valorAV = CAV * document.getElementById("adultos").value;
                document.getElementById("vav").value = valorAV;
                totalV = valorAV + valorNV;
                document.getElementById("vtv").value = totalV;
            }
        }else{
            document.getElementById("vueloidag").style.display = "block";
            document.getElementById("vuelovueg").style.display = "none";

            //valores Ida
            document.getElementById("fidam").value = document.getElementById("fida").value;
            document.getElementById("ovuem").value = document.getElementById("ori").value;
            document.getElementById("dvuem").value = document.getElementById("des").value;
            document.getElementById("ca").value = document.getElementById("adultos").value;
            document.getElementById("cn").value = document.getElementById("niño").value;
            const CA = 45000;
            const CN = 28000;
            let valorA = 0;
            let valorN = 0;
            let total = 0;
            if(document.getElementById("niño").value == 0){
                document.getElementById("vn").value = '0';
                
                valorA = CA * document.getElementById("adultos").value;
                document.getElementById("va").value = valorA;
                total = valorA + valorN;
                document.getElementById("vt").value = total;
            }else{
                valorN = CN * document.getElementById("niño").value;
                document.getElementById("vn").value = valorN;
                valorA = CA * document.getElementById("adultos").value;
                document.getElementById("va").value = valorA;
                total = valorA + valorN;
                document.getElementById("vt").value = total;
            }
            
        }
    }
});