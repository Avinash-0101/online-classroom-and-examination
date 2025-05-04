import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Subject = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    // Fetch subjects from backend
    axios.get('http://localhost:5000/api/subjects/list')
      .then((res) => {
        setSubjects(res.data);
      })
      .catch((err) => {
        console.error('Error fetching subjects:', err);
      });
  }, []);

  return (
    <div>
      <h2>Select Subject</h2>
      <select>
        <option value="">Select a subject</option>
        {subjects.map((subject, idx) => (
          <option key={idx} value={subject}>{subject}</option>
        ))}
      </select>
    </div>
  );
};

export default Subject;
  