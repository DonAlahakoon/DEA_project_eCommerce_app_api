/**
 * Body Component uses to generate a body of descriptions.
 * Owner: Demesh Fernando
 * Created Date: 22 July 2024
 * Last Updated Date: 22 July 2024
 * @component
 * @param {string} props
 * @returns Provided description with <p></p> tags.
 * @example
 * <Body description="This will be the description">
 */
export default function Body(props) {
  return <p>{props.description}</p>;
}
