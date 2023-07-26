import React from 'react'
import Introductions from './Introductions'

const Students = () => {
    const studentList = ['Peter', 'Dimeji', 'Rufus', 'Uwana', 'John' ]
  return (
    <div>
            <h1>Student List</h1>
            {studentList.map((list, index) => (
            <Introductions key={index} username={list} tech ="GoMyCode Student" />
            ))}

    </div>
    ) 
}

export default Students
