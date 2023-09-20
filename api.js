import Airtable from "airtable";

let AIRTABLE_API = import.meta.env.VITE_AIRTABLE_API;

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
});

// if (process.env.NODE_ENV === "production") {
//   AIRTABLE_API = "";
// } else {
//   AIRTABLE_API = import.meta.env.VITE_AIRTABLE_API;
// }

export async function fetchProjectsFromAirTable() {
  const base = new Airtable({ apiKey: AIRTABLE_API }).base("appGGpMwmKLqSq1SY");

  let projects = await base("Projects")
    .select({
      filterByFormula: "IF({Display?}, TRUE(), FALSE())",
    })
    .all();

  const projectData = projects.map((project) => project.fields);
  projectData.sort((a, b) => {
    if (a.order > b.order) return 1;
    else return -1;
  });
  return projectData;
}
