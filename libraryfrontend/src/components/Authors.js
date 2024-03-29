import { gql, useQuery } from "@apollo/client";

const ALL_AUTHORS = gql`
  query {
    allAuthors {
      bookCount
      name
      born
    }
  }
`;

const Authors = (props) => {
  const result = useQuery(ALL_AUTHORS);

  if (!props.show) {
    return null;
  }
  if (!result.data) return null;

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {result.data.allAuthors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Authors;
