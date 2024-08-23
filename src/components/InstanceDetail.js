// src/components/InstanceDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function InstanceDetail() {
  const { year, semester, course_id } = useParams();
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/instances/${year}/${semester}/${course_id}/`)
      .then(response => setInstance(response.data))
      .catch(error => console.error('Error fetching instance:', error));
  }, [year, semester, course_id]);

  return (
    <div>
      {instance ? (
        <div>
          <h1>Instance Details</h1>
          <p>Course ID: {instance.course_id}</p>
          <p>Year: {instance.year}</p>
          <p>Semester: {instance.semester}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default InstanceDetail;
