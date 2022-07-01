
import Container from 'react-bootstrap/Container'

interface ErrorsProps {
  errors: string[]
}

function Errors({ errors }: ErrorsProps) {
  if (!errors || errors.length === 0) {
    return null;
  }

  console.log(errors);
  return (
    <>
      <Container className="col-md-8 mx-auto">
      <div className="alert alert-danger">
        <p>The following errors were found:</p>
        <ul>
          {errors.map(error => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
      </Container>
    </>
  );
}

export default Errors;