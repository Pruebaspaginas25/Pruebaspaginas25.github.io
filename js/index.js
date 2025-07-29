document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzm_gOVdSSRLvsrExk5WsgwmZ8FnZQc6poZ4jppRjyQSHjpz1AfsL1Ep03s6uv6UE8_/exec';

    let status = 'Invalid';
    if (username === 'Angel.calidad' && password === 'DCI_calidad') {
        status = 'Success';  
        window.location.href = 'https://sites.google.com/view/dci-work-perfilescontrol/asignaci%C3%B3n-general';
    } else if (username === 'Julio.administración' && password === 'DCI_administración') {
        status = 'Success';
        window.location.href = 'https://sites.google.com/view/dci-work-perfilescontrol/asignaci%C3%B3n-general';
    } else if (username === 'Ruben.taller' && password === 'DCI_taller') {
        status = 'Success';
        window.location.href = 'https://sites.google.com/view/dci-work-perfilescontrol/perfiles-de-trabajadores/trabajador-001';
    } else if (username === 'Hugo.taller' && password === 'DCI_taller') {
        status = 'Success';
        window.location.href = 'https://sites.google.com/view/dci-work-perfilescontrol/iniciocierre-de-sesi%C3%B3n';
    } else if (username === 'Desarrollo.tecnico' && password === 'DCI_tecnico') {
        status = 'Success';
        window.location.href = 'https://sites.google.com/view/dci-work-perfilescontrol/iniciocierre-de-sesi%C3%B3n';
    } else if (username === 'Clientes.Demo' && password === 'DCI_demo001') {
        status = 'Success';
        window.location.href = 'https://sites.google.com/view/dci-work-perfilescontrol/iniciocierre-de-sesi%C3%B3n';
    } else {
        document.getElementById('error').textContent = 'Invalid username or password.';
    }

    // Send data to Google Apps Script
    await fetch(scriptURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, status })
    });
});