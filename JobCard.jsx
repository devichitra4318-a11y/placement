function JobCard({ job }) {
  const handleApply = () => {
    alert(`Application started for ${job.role} at ${job.company}`);
  };

  return (
    <div className="job-card">

      <h2>{job.company}</h2>

      <h3>{job.role}</h3>

      <p>📍 {job.location}</p>

      <p>💰 Package: {job.package}</p>

      <p>📅 Deadline: {job.deadline}</p>

      <button onClick={handleApply}>
        Apply Now
      </button>

    </div>
  );
}

export default JobCard;