/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import useFetch from "../../services/useGetData";

const PetList = () => {
  const [pets, setPets] = useState([]);
  const { status, data } = useFetch("http://localhost:4100/pets");

  useEffect(() => {
    if (status === "fetched") {
      setPets(data.data);
    }
  }, [status]);

  return (
    <Container fluid>
      <div class="row justify-content-md-center">
        {pets.length > 0 &&
          pets.map((pet) => {
            return (
              <div class="col-xxl-1 col-xl-2 col-lg-4 col-md-6 col-sm-12">
                <div className="card">
                  <div className="card-header">{pet.pet_type}</div>
                  <div className="card-body">
                    <h5 className="card-title">{pet.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      age: {pet.age}
                    </h6>

                    {pet.visits.length > 0 && (
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <p className="small">
                            last visit: {pet.visits[0].visit_date}
                          </p>
                        </li>
                        <li className="list-group-item">
                          <h6 className="card-subtitle mb-2 text-muted">
                            Reason
                          </h6>

                          <p className="card-text">{pet.visits[0].reason}</p>
                        </li>
                      </ul>
                    )}

                    <a href="#" className="card-link">
                      Show All Records
                    </a>
                  </div>
                </div>{" "}
              </div>

              /*  <div className="card" style={{ width: "18rem" }}>
              <div className="card-header">{pet.pet_type}</div>
              <div className="card-body">
                <h5 className="card-title">{pet.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  age: {pet.age}
                </h6>

                {pet.visits.length > 0 && (
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      
                      <p className="small">
                        last visit: {pet.visits[0].visit_date}
                      </p>
                    </li>
                    <li className="list-group-item">
                      <h6 className="card-subtitle mb-2 text-muted">Reason</h6>

                      <p className="card-text">{pet.visits[0].reason}</p>
                    </li>
                 
                  </ul> 
                )}

                <a href="#" className="card-link">
                  Show All Records
                </a>
              </div>
            </div>*/
            );
          })}
      </div>
    </Container>
  );
};

export default PetList;
