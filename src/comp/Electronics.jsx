import React, { useEffect, useState } from 'react'

function Electronics() {
    const [api, setApi] = useState([])
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")

    useEffect(() => {
        fetch("https://dummyjson.com/products/category/smartphones")
            .then((res) => res.json())
            .then((data) => {
                setApi(data.products)
            })
            
    }, [])

  
    let filteredData = api.filter((el) =>
        el.title.toLowerCase().includes(search.toLowerCase())
    )
    if (sort === "low") {
        filteredData.sort((a, b) => a.price - b.price)
    } else if (sort === "high") {
        filteredData.sort((a, b) => b.price - a.price)
    } else if (sort === "az") {
        filteredData.sort((a, b) => a.title.localeCompare(b.title))
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4"> Electronics (Smartphones)</h2>

            <div className="row mb-4">
                <div className="col-md-6 mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search product..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="col-md-6 mb-2">
                    <select
                        className="form-select"
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="">Sort By</option>
                        <option value="low">Price: Low to High</option>
                        <option value="high">Price: High to Low</option>
                        <option value="az">Name: A to Z</option>
                    </select>
                </div>
            </div>
            <div className="row">
                {filteredData.map((el) => (
                    <div key={el.id} className="col-md-4 mb-4">
                        <div className="card h-100 shadow">

                            <img
                                src={el.thumbnail}
                                className="card-img-top p-3"
                                alt={el.title}
                                style={{ height: "200px", objectFit: "contain" }}
                            />

                            <div className="card-body text-center">
                                <h6 className="card-title">{el.title}</h6>
                                <p className="text-success fw-bold">
                                    ${el.price}
                                </p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Electronics