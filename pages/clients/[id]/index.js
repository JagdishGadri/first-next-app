import React from "react";
import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();
  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "jagdish", clientprojectid: "projecta" },
    });
  }
  return (
    <div>
      <h1>Client Project Page</h1>
      <button onClick={loadProjectHandler}>Load A Project</button>
    </div>
  );
}

export default ClientProjectPage;
