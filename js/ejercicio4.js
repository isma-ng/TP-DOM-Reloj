 document.addEventListener('DOMContentLoaded', function() {
            const fechaElement = document.getElementById('fecha');
            const horaElement = document.getElementById('hora');
            const segundosElement = document.getElementById('segundos');
            const anoElement = document.getElementById('ano');
            
            function updateClock() {
                const now = new Date();

                const optionsDate = { weekday: 'long', day: 'numeric', month: 'long' };
                const fechaFormateada = now.toLocaleDateString('es-ES', optionsDate);

                let hours = now.getHours();
                const ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12; 
                const minutes = now.getMinutes().toString().padStart(2, '0');
                
                const seconds = now.getSeconds().toString().padStart(2, '0');
                
                const year = now.getFullYear();
                
                fechaElement.textContent = fechaFormateada;
                horaElement.textContent = `${hours}:${minutes} ${ampm}`;
                segundosElement.textContent = `${seconds}`;
                anoElement.textContent = `Año ${year}`;

                setTimeout(updateClock, 1000);
            }

            updateClock();
        });