import { useState } from "react";
import JobCard from "../Components/JobCard";
import { jobs } from "../data/jobs";

function Jobs() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.company.toLowerCase().includes(search.toLowerCase()) ||
    job.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">

      <h1>💼 Placement Opportunities</h1>

      <p>Find the latest job opportunities for students.</p>

      <input
        type="text"
        placeholder="Search company or job role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="job-grid">

        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
          />
        ))}

      </div>

    </div>
  );
}

export default Jobs;