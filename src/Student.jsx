function Student(props){
    return (
        <div className="card shadow mt-5 p-5 border-primary">
            <h1 className="text-primary mb-3">Student Info</h1>
            <p className="mb-2 fs-4 fw-semibold">Name:{props.name}</p>
            <p className="mb-2 fs-4 fw-semibold">Course:{props.course}</p>
            <p className="mb-2 fs-4 fw-semibold">Email:{props.email}</p>
            <p className="mb-2 fs-4 fw-semibold">Marks:{props.marks}</p>
            {
                props.marks>=40 ? (
                    <>
                    <h4 className="text-success fs-1 fw-semibold">Pass</h4>
                    {
                        props.marks>=85 ? (
                            <h4 className="text-primary fs-1 fw-semibold">Grade: A</h4>
                        ):
                        props.marks>=65 ? (
                            <h4 className="text-info fs-1 fw-semibold">Grade: B</h4>
                        ):
                        props.marks>=40 (
                            <h4 className="text-warning fs-1 fw-semibold">Grade: C</h4>
                        )
                    }
                    </>
                ) : (
                    <h4 className="text-danger fs-1">Fail</h4>
                )
            }
            
        </div>
    )
}

export default Student;