// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Menu from "./menu"

// const Showclass = () => {{
//   const [data, setData] = useState([]);
//   const [updateData, setUpdateData] = useState({});
//   const [Tdata, setTData] = useState([]);
//   useEffect(() => {
//         axios.get('http://localhost:6969/getCdata')
//         .then((response) => {
//             setData(response.data);
//         })
//         axios.get('http://localhost:6969/getTdata')
//         .then((response) => {
//             setTData(response.data.filter((ele)=>{
//                 return ele.avail;
//             }).map((ele)=>{
//                 return ele.name;
//             }) )
//         })
//   }, []);
//   const getName = async (id)=>{
//         try {
//           const response = await axios.put(http://localhost:6969/getTdata/${id});
//           console.log('name');
//           return 'Hi'
//         } catch (error) {
//           return 'None';
//         }
//   }
//   const handleDelete = (id,name) => {
//     axios.delete(http://localhost:6969/deleteC/${id})
//       .then(() => {
//         axios.get('http://localhost:6969/getCdata')
//           .then((response) => {
//             setData(response.data);
//           });
//           try{
//             axios.put(http://localhost:6969/clearclass/${name});
//             alert('deleted successfully');
//           }
//             catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       })
//       .catch((error) => {
//         alert(error.response.data.err)
//       });
//   };

//   return (
//     <div align='center'>
//         <Menu />
//       <br /><br></br>
//       <table border={5} cellPadding={10} style={{textAlign:'center'}}>
//         <thead>
//           <tr>
//             <th>Class Name</th>
//             <th>Assigned Teacher</th>
//             <th>CID</th>
//             <th>No of Students</th>
//             <th>Options</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item._id}>
//               <td>{item.name}</td>
//               <td>{getName(item.teachers)}</td>
//               <td>{item.cid}</td>
//               <td>{item.students.length}</td>
//               <td>
                     
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// }

// export default Showclass;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from "./menu"

const Showclass = () => {
  const [data, setData] = useState([]);
  const [teacherNames, setTeacherNames] = useState({});
  const [Tdata, setTData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:6969/getCdata')
      .then((response) => {
        setData(response.data);
      });

    axios.get('http://localhost:6969/getTdata')
      .then((response) => {
        setTData(response.data.filter((ele) => ele.avail).map((ele) => ele.name));
      })
  }, []);

  const getName = async (id) => {
    try {
      const response = await axios.put(`http://localhost:6969/getTdata/${id}`);
      return response.data.name;
    } catch (error) {
      console.error('Error fetching teacher name:', error);
      return '';
    }
  }

  useEffect(() => {
    // Fetch teacher names for all teacher IDs in the data
    const fetchData = async () => {
      const names = {};
      for (const item of data) {
        const teacherName = await getName(item.teachers);
        names[item.teachers] = teacherName;
      }
      setTeacherNames(names);
    };

    fetchData();
  }, [data]);

  const handleDelete = (id, tid) => {
    axios.delete(`http://localhost:6969/deleteC/${id}`)
    .then(() => {
      axios.get('http://localhost:6969/getCdata')
        .then((response) => {
          setData(response.data);
        });
        try{
          axios.put(`http://localhost:6969/clearclass/${tid}`);
          alert('deleted successfully');
        }
          catch (error) {
        console.error('Error fetching data:', error);
      }
    })
    .catch((error) => {
      alert(error.response.data.err)
    });
  };

  return (
    <div align='center'>
      <Menu />
      <br /><br></br>
      <table border={5} cellPadding={10} style={{ textAlign: 'center' }}>
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Assigned Teacher</th>
            <th>CID</th>
            <th>No of Students</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{teacherNames[item.teachers]}</td>
              <td>{item.cid}</td>
              <td>{item.students.length}</td>
              <td><button onClick={() => handleDelete(item._id,item.tid)}>Delete Class</button></td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Showclass;