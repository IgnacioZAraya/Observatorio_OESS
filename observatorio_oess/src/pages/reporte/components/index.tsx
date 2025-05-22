import React from "react";
import "../style.css";

function ReportPage() {
  return (
    <div className="wrapper">
      <main className="main-content">
        <iframe
          title="sitio_vrs_11_variante3"
          className="info-Bi"
          src="https://app.powerbi.com/view?r=eyJrIjoiM2JlNjBlYzItZjI4Mi00MzQ2LWI3NjQtZTdlMGExNGRhZDNiIiwidCI6IjM1ZDRkMWFhLWFlYTItNDI3Ny1iMGUyLWJkNDM3OWQ2OGVkMiJ9&pageName=d152ce7acdd17a756b95"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </main>
    </div>
  );
}

export default ReportPage;
