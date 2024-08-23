// src/components/InstanceList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function InstanceList() {
  const { year, semester } = useParams();
  const [instances, setInstances] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/instances/${year}/${semester}/`)
      .then(response => setInstances(response.data))
      .catch(error => console.error('Error fetching instances:', error));
  }, [year, semester]);

  return (
    <div>
      <h1>Instances for Year {year}, Semester {semester}</h1>
      <ul>
        {instances.map(instance => (
          <li key={instance.id}>
            <a href={`/instances/${year}/${semester}/${instance.course_id}`}>Course ID {instance.course_id}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InstanceList;
