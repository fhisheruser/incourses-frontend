// src/components/CourseDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/courses/${id}/`)
      .then(response => setCourse(response.data))
      .catch(error => console.error('Error fetching course:', error));
  }, [id]);

  return (
    <div>
      {course ? (
        <div>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CourseDetail;
