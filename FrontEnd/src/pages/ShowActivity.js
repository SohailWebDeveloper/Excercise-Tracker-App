import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import Swal from "sweetalert2";
const ShowActivity = () => {
  const [showActivityData, setShowActvityData] = useState([]);
  const navigate = useNavigate();

  const getActivityData = async () => {
    let result = await fetch(
      "http://localhost:5000/api/v1/showworkout/showactivity"
    );
    result = await result.json();
    setShowActvityData(result);
  };
  // console.log("my Data-----"+showActivityData);
  useEffect(() => {
    getActivityData();
  }, []);
  const deletingData=(id)=>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        deleteActivity(id)
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your file is safe :)',
          'error'
        )
      }
    })
  }

  const deleteActivity = async (id) => {
    let res = await fetch(
      `http://localhost:5000/api/v1/deleteworkout/deleteactivity/${id}`,
      {
        method: "DELETE",
      }
    );
    res = await res.json();
    console.log(res);
    if (res) {
      getActivityData();
    }
  };

  return (
    <>
      {/* <div className="container my-5 w-75">

<table className="table table-striped table-hover">
  <thead>
    <tr className="bg-primary text-light">
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">description</th>
      <th scope="col">activity</th>
      <th scope="col">duration</th>
      <th scope="col">date</th>
      <th scope="col">&nbsp;</th>
    </tr>
  </thead>
  <tbody>
    {
      showActivityData.map((su,ind)=>{
        return(
          <>
            <tr>
                  <th scope="row">{ind+1}</th>
                  <td>{su.name}</td>
                  <td>{su.description}</td>
                  <td>{su.activity}</td>
                  <td>{su.duration}</td>
                  <td>{su.date}</td>
                  <td>
                    <a onClick={()=>navigate(`/editactivity/${su._id}`)} className="btn btn-success btn-sm">
                        Edit <i class="fas fa-edit"></i>
                    </a>
                    <a onClick={()=>deleteActivity(su._id)} className="btn btn-danger btn-sm">
                        Delete <i class="fa-solid fa-trash-can"></i>
                    </a>
                </td>              
            </tr>                
          </>
        )
      })
    }
    
  </tbody>
</table>
</div> */}
      <div className="container">
        <div className="row">
          {showActivityData.map((su, ind) => {
            return (
              <>
                <div className="card p-0 m-3" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <strong className="text-warning">Name</strong>
                    <h5 className="card-title">{su.name}</h5>
                    <strong className="text-warning">Description</strong>
                    <h5 className="card-title">{su.description}</h5>
                    <strong className="text-warning">Activities</strong>
                    <h5 className="card-title">{su.activity}</h5>
                    <strong className="text-warning">Duration</strong>
                    <p>{su.duration}</p>
                    <strong className="text-warning">Date</strong>
                    <p>{su.date}</p>
                    <Stack
                      direction="row"
                      spacing={2}
                      style={{ marginTop: "10px" }}
                    >
                      <Button
                        variant="contained"
                        endIcon={<EditIcon />}
                        onClick={() => navigate(`/editactivity/${su._id}`)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        color="error"
                        onClick={() => deletingData(su._id)}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShowActivity;
