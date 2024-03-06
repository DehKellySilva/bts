function countdown() {
    const targetDate = new Date("2024-06-12T00:00:00+09:00"); // Data-alvo para o Evento 1
    
    const now = new Date().getTime();
    const difference = targetDate - now;
    
    if (difference < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "O evento começou!";
        return;
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function countdown2() {
    const targetDate2 = new Date("2024-10-17T00:00:00+09:00"); // Data-alvo para o Evento 2
    
    const now = new Date().getTime();
    const difference = targetDate2 - now;
    
    if (difference < 0) {
        clearInterval(interval2);
        document.getElementById('countdown2').innerHTML = "O evento começou!";
        return;
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById('countdown2').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function countdown3() {
    const targetDate2 = new Date("2025-06-10T00:00:00+09:00"); // Data-alvo para o Evento 2
    
    const now = new Date().getTime();
    const difference = targetDate2 - now;
    
    if (difference < 0) {
        clearInterval(interval2);
        document.getElementById('countdown3').innerHTML = "O evento começou!";
        return;
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById('countdown3').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function countdown4() {
    const targetDate2 = new Date("2025-06-10T00:00:00+09:00"); // Data-alvo para o Evento 2
    
    const now = new Date().getTime();
    const difference = targetDate2 - now;
    
    if (difference < 0) {
        clearInterval(interval2);
        document.getElementById('countdown4').innerHTML = "O evento começou!";
        return;
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById('countdown4').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function countdown5() {
    const targetDate2 = new Date("2025-06-11T00:00:00+09:00"); // Data-alvo para o Evento 2
    
    const now = new Date().getTime();
    const difference = targetDate2 - now;
    
    if (difference < 0) {
        clearInterval(interval2);
        document.getElementById('countdown5').innerHTML = "O evento começou!";
        return;
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById('countdown5').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function countdown6() {
    const targetDate2 = new Date("2025-06-11T00:00:00+09:00"); // Data-alvo para o Evento 2
    
    const now = new Date().getTime();
    const difference = targetDate2 - now;
    
    if (difference < 0) {
        clearInterval(interval2);
        document.getElementById('countdown6').innerHTML = "O evento começou!";
        return;
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById('countdown6').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function countdown7() {
    const targetDate2 = new Date("2025-06-21T00:00:00+09:00"); // Data-alvo para o Evento 2
    
    const now = new Date().getTime();
    const difference = targetDate2 - now;
    
    if (difference < 0) {
        clearInterval(interval2);
        document.getElementById('countdown7').innerHTML = "O evento começou!";
        return;
    }
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById('countdown7').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

countdown(); // Inicia a contagem regressiva para o Evento 1 imediatamente
const interval = setInterval(countdown, 1000); // Atualiza a contagem regressiva para o Evento 1 a cada segundo

countdown2(); // Inicia a contagem regressiva para o Evento 2 imediatamente
const interval2 = setInterval(countdown2, 1000); // Atualiza a contagem regressiva para o Evento 2 a cada segundo

countdown3(); // Inicia a contagem regressiva para o Evento 2 imediatamente
const interval3 = setInterval(countdown3, 1000); // Atualiza a contagem regressiva para o Evento 2 a cada segundo

countdown4(); // Inicia a contagem regressiva para o Evento 2 imediatamente
const interval4 = setInterval(countdown4, 1000); // Atualiza a contagem regressiva para o Evento 2 a cada segundo

countdown5(); // Inicia a contagem regressiva para o Evento 2 imediatamente
const interval5 = setInterval(countdown5, 1000); // Atualiza a contagem regressiva para o Evento 2 a cada segundo

countdown5(); // Inicia a contagem regressiva para o Evento 2 imediatamente
const interval6 = setInterval(countdown6, 1000); // Atualiza a contagem regressiva para o Evento 2 a cada segundo

countdown7(); // Inicia a contagem regressiva para o Evento 2 imediatamente
const interval7 = setInterval(countdown7, 1000); // Atualiza a contagem regressiva para o Evento 2 a cada segundo