// Dados estáticos dos eventos
const listaEventos = [
    {
        titulo: "Hydro nas Escolas",
        curso: "EVENTO",
        organizador: "Tanuzia e Marysa",
        data: "2026-08-06",
        hora: "08:00 às 17:00",
        local: "AUDITÓRIO",
        solicitante: "Tanuzia e Marysa"
    },
    {
        titulo: "Aula Magna do curso de Psicologia 2026.2",
        curso: "EVENTO",
        organizador: "Clauber Wellington Pinheiro Torres",
        data: "2026-08-10",
        hora: "19:00 às 20:30",
        local: "AUDITÓRIO",
        solicitante: "Clauber Wellington Pinheiro Torres"
    },
    {
        titulo: "Reunião de abertura do estágio clínico",
        curso: "EVENTO",
        organizador: "Stella Cezimbra",
        data: "2026-08-17",
        hora: "18:00 às 19:30",
        local: "AUDITÓRIO",
        solicitante: "Stella Cezimbra"
    },
    {
        titulo: "I Simpósio da Comissão Estadual de Recuperação Judicial e Falências",
        curso: "EVENTO",
        organizador: "Maria Clara",
        data: "2026-08-12",
        hora: "19h às 22h",
        local: "AUDITÓRIO",
        solicitante: "Maria Clara"
    },
    {
        titulo: "Aula Conjunta de Introdução de Biologia Celular e do Desenvolvimento",
        curso: "EVENTO",
        organizador: "Ana Paula Atanazio de Souza Evangelista",
        data: "2026-08-05",
        hora: "19 hs às 19:30",
        local: "AUDITÓRIO",
        solicitante: "Ana Paula Atanazio de Souza Evangelista"
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

    const eventosOrdenados = [...listaEventos].sort((a, b) => {
        const dataA = new Date(a.data + "T00:00:00");
        const dataB = new Date(b.data + "T00:00:00");
        return dataA - dataB;
    });

    eventosOrdenados.forEach(ev => {
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
                    <i class="fa-solid fa-user"></i> Responsável: <strong>${ev.solicitante}</strong>
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