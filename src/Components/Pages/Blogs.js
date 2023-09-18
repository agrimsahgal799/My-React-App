import React, { useEffect, useState } from 'react'
import Loader from '../Common/Loader';
import ReactPaginate from 'react-paginate';

export default function Blogs() {

  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 20; 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then(
        (data) => { 
          setIsLoaded(true);
          setData(data); 
          setTotalPages(Math.ceil(data.length / itemsPerPage));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if(error){
    return <div>{error.message}</div>
  }
  else if(!isLoaded){
    return <Loader />
  }
  else{

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const subset = data.slice(startIndex, endIndex);

    const handlePageChange = (selectedPage) => {
      setCurrentPage(selectedPage.selected);
    };
  
    return (
      <>
        <div className="container base-container">
          <h1>Blogs</h1>
          <div className="album-table py-3">
            <div className="table-responsive">
              <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Album ID</th>
                      <th scope="col">Thumbnail URL</th>
                      <th scope="col">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subset.map((item) => {
                      return (
                        <tr className="Album-list" key={item.id}>
                          <td className="id">{item.id}</td>
                          <td className="Album-id">{item.albumId}</td>
                          <td className="Album-thumbnailUrl"><a href={item.url} target="_blank" rel="noreferrer"><img src={item.thumbnailUrl} alt=""></img></a></td>
                          <td className="Album-title">{item.title}</td>
                        </tr>
                      )
                    })}
                  </tbody>
              </table>
            </div>

            <ReactPaginate
                pageCount={totalPages}
                onPageChange={handlePageChange}
                forcePage={currentPage}
                containerClassName={"pagination pt-2"}
                previousLabel="&laquo;"
                nextLabel="&raquo;"
                previousClassName={"page-item"}
                nextClassName={"page-item"}
                pageClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                pageLinkClassName={"page-link"}
                breakLabel={"..."}
                activeClassName={"active"}
            />
          </div>
        </div>
      </>
    )
  }
}
