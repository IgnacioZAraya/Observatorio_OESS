import React from "react";
import "../style.css";

function ReportPage() {
  return (
    <div className="wrapper">
      <main className="main-content">
        <iframe
          title="sitio_vrs_11_variante3"
          className="info-Bi"
          src="https://app.powerbi.com/view?r=eyJrIjoiYjQ5NWI4NWMtMGEwMy00NDEzLTg4MDItYzY1MmNkNzI5YjRkIiwidCI6IjM1ZDRkMWFhLWFlYTItNDI3Ny1iMGUyLWJkNDM3OWQ2OGVkMiJ9"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </main>
    </div>
  );
}

export default ReportPage;
