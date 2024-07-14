// Example script to dynamically update status and incident information
document.addEventListener("DOMContentLoaded", function() {
    const services = [
        { name: "Service 1", status: "Operational" },
        { name: "Service 2", status: "Degraded Performance" }
        // Add more services as needed
    ];

    const incidents = [
        {
            title: "Incident Title",
            date: "Date",
            description: "Description of the incident and resolution steps."
        }
        // Add more incidents as needed
    ];

    const statusOverview = document.getElementById("status-overview");
    const incidentHistory = document.getElementById("incident-history");

    services.forEach(service => {
        const serviceElement = document.createElement("div");
        serviceElement.classList.add("service");
        serviceElement.innerHTML = `<h2>${service.name}</h2><p class="status">${service.status}</p>`;
        statusOverview.appendChild(serviceElement);
    });

    incidents.forEach(incident => {
        const incidentElement = document.createElement("div");
        incidentElement.classList.add("incident");
        incidentElement.innerHTML = `<h3>${incident.title}</h3><p class="date">${incident.date}</p><p class="description">${incident.description}</p>`;
        incidentHistory.appendChild(incidentElement);
    });
});
