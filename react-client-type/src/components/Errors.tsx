
interface ErrorMessage {
  title: string
  message: string
}

function Errors(errors: string[]) {
  if (!errors || errors.length === 0) {
    return null;
  }

  console.log(errors);
  return (
    <div className="alert alert-danger">
      <p>The following errors were found:</p>
      <ul>
        {errors.map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    </div>
  );
}

export default Errors;