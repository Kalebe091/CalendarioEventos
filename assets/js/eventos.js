// Dados estáticos dos eventos
const listaEventos = [
    {
        titulo: "Aula Magna 2026.1: Onde há justiça, há Direito; onde há Direito, há compromisso com a sociedade.",
        curso: "DIREITO",
        organizador: "Coordenação de Direito",
        data: "2026-02-09", // Evento Passado
        hora: "19:00 às 22:00",
        local: "Auditório",
        solicitante: "Maria Clara"
    },
    {
        titulo: "Aula Magna 2026.1: Ser psicóloga(o): Expectativas, Experiências e Responsabilidades",
        curso: "Psicologia",
        organizador: "Coordenação Psicologia",
        data: "2026-02-09",
        hora: "19:00 às 22:00",
        local: "Sala 29/30",
        solicitante: "Clauber Torres"
    },
    {
        titulo: "Aula Magna 2026.1: Alinhamento de expectativas e apresentação do curso",
        curso: "EAD",
        organizador: "Coordenação de EAD",
        data: "2026-02-02", // Evento Passado
        hora: "19:00 às 22:00",
        local: "Auditório",
        solicitante: "Ellen Borges"
    }
];

/**
 * Formata a data para o padrão: "domingo, 15 de fevereiro de 2026"
 */
function formatarDataLonga(dataString) {
    const data = new Date(dataString + "T00:00:00"); // Força fuso local
    return data.toLocaleDateString('pt-BR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

function renderizarPagina() {
    const containerProximos = document.getElementById('proximos-grid');
    const containerEncerrados = document.getElementById('encerrados-grid');

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    listaEventos.forEach(ev => {
        const dataEv = new Date(ev.data + "T00:00:00");
        const isEncerrado = dataEv < hoje;

        const cardHTML = `
            <div class="card ${isEncerrado ? 'card-muted' : ''}">
                <div class="card-border"></div>
                <div class="info-meta">${ev.curso} | ${ev.organizador}</div>
                <h3>${ev.titulo}</h3>
                <p><i class="fa-regular fa-calendar"></i> ${formatarDataLonga(ev.data)}</p>
                <p><i class="fa-regular fa-clock"></i> ${ev.hora}</p>
                <div class="local-tag">
                    <i class="fa-solid fa-location-dot"></i> ${ev.local}
                </div>
                <p class="solicitante">
                    <i class="fa-solid fa-user"></i> Solicitado por: <strong>${ev.solicitante}</strong>
                </p>
            </div>
        `;

        if (isEncerrado) {
            containerEncerrados.innerHTML += cardHTML;
        } else {
            containerProximos.innerHTML += cardHTML;
        }
    });
}

// Inicializa a renderização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', renderizarPagina);